<template>
  <div class="home">
    <component :is="dyComponent"></component>
    <br>
    <br>
    <el-row style="margin-left: 150px;margin-top: 80px;">
      <span style="font-weight:bold;font-size:26px">HEADLINES</span>
    </el-row>
    <el-row v-for="sum in summaries" style="margin-left: 150px;margin-right: 150px;margin-top:20px;background-color:#FFE8E8;padding:60px;border-radius:10px">
      <el-col :span="16" style="text-align:left;">
        <span style="font-weight:bold;font-size:20px">{{sum.title}}</span>
        <br>
        <br>
        <div align="left">
          <div v-for="tag in sum.tags" style="font-size:14px;border-radius:10px;background-color:#8E8E8E;color:white;display:inline-block;margin-right:15px;padding:5px">#
            {{ tag }}</div>
        </div>
      </el-col>
      <el-col :span="8" style="position:relative">

        <button type="button" class="sum-button" @click="goToSummary(sum.id)">Summary</button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import API_BASE_URL from "@/api";
import router from "@/router";
import LoginHome from "@/components/LoginHome";
import NonLoginHome from "@/components/NonLoginHome";
export default {
  name: 'Home',
  mounted() {
    window.addEventListener('email-localstorage-changed', (event) => {
      let email = event.detail.storage;
      if (email !== null && email !== '') {
        this.dyComponent = LoginHome;
        this.isLogin = true;
      } else {
        this.dyComponent = NonLoginHome;
        this.isLogin = false;
      }
    });
  },
  data() {
    return {
      summaries:[],
      dyComponent:NonLoginHome,
      isLogin: false
    }
  },
  methods: {
    gatherSummaries() {
      if (this.isLogin) {
        console.log('recommended..')
        let recommended_url = API_BASE_URL + '/recommend'

        let userid = 'none2'
        if (localStorage.getItem('email') !== null && localStorage.getItem('email') !== '') {
          userid = localStorage.getItem('email');
        }

        this.$axios.get(recommended_url, {
          headers: {
            'userid': userid
          }
        }).then(res => {
                console.log(res);
                let data = res.data.results;
                for (let i = 0; i < data.length; i++) {
                  this.summaries.push({
                    title: data[i].title,
                    id: data[i].key,
                    tags: data[i].tags
                  });
                }
            })
      
                 // ideal structure {username, id, image_url}
            .catch(err => {
                 console.log('err');
                 console.log('Error: ', err.message);
            });
      } else {
        console.log('trending...')
        let trending_url = API_BASE_URL + '/trending'
        this.$axios.get(trending_url).then(res => {
          console.log(res);
          let data = res.data.results;
          for (let i = 0; i < data.length; i++) {
            this.summaries.push({
              title: data[i].title,
              id: data[i].key,
              tags: data[i].tags
            });
          }
        })
      
            // ideal structure {username, id, image_url}
            .catch(err => {
              console.log('err');
              console.log('Error: ', err.message);
            });
      }

      // this.summaries.push({
      //   title:'Google Fiber is launching 5-gig and 8-gig plan',
      //   id:'example1',
      //   tags:['tag1','tag2']
      // });
    },
    goToSummary(id) {
      router.push({name:'Summary', params: {id: id}})
    },
    checkLogin() {
      if (localStorage.getItem('email') !== null && localStorage.getItem('email') !== '') {
        this.isLogin = true;
        this.dyComponent = LoginHome;
      } else {
        this.isLogin = false;
        this.dyComponent = NonLoginHome;
      }
    }
  },created() {
    this.checkLogin();

    this.gatherSummaries();
  }
}
</script>
<style scoped>
.sum-button {
  font-size:20px;
  position:absolute;
  bottom: 5px;
  right: 0px;
  font-weight:bold;
  background-color:white;
  color:#EC8181;
  border-radius:10px;
  border-style:solid;
  border-color:white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);

}
.sum-button:hover {
  background-color: #e7e7e7;
  border-color:#e7e7e7;
}
</style>