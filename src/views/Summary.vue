<template>
  <el-row style="margin: 80px 150px 0 150px;background-color:#FFE8E8;padding:60px;border-radius:10px">
    <el-col :span="16" style="text-align:left;">
      <span style="font-weight:bold;font-size:20px">{{title}}</span>
      <br>
      <br>
      <div align="left">
        <div v-for="tag in tags" style="font-size:14px;border-radius:10px;background-color:#8E8E8E;color:white;display:inline-block;margin-right:15px;padding:5px">#
          {{ tag }}</div>
      </div>
    </el-col>
    <el-col :span="8" style="position:relative">
      <a href="/">
        <button type="button" class="close-btn">
          <el-icon style="padding-top: 5px"><CloseBold /></el-icon>
        </button>
      </a>
    </el-col>
  </el-row>
  <el-row style="text-align:left;margin-left: 150px;margin-right: 150px;margin-top:20px">
    {{summary}}
  </el-row>
  <el-row style="margin-left: 150px;margin-right: 150px;margin-top:20px">
    <el-col :span="1">
      <button type="button" @mouseover="hovered = true" @mouseleave="hovered = false" @click="markLike" :style="[isLiked || hovered ? {'background-color':'#e7e7e7','border': '#e7e7e7'}:{'background-color':'white','border': 'white'}]" style="padding-top:5px;border-radius: 10px;box-shadow: 0 4px 4px 0 rgba(0,0,0,0.3)">
        <el-icon :size="20" style="color: #Ec8181"><StarFilled /></el-icon>
      </button>
      <br>
      <span :style="[isLiked ? {'visibility':'visible'}:{'visibility':'hidden'}]" style="color: #EC8181;">Liked!</span>
    </el-col>
    <el-col :span="4">
      <button type="button" @click="readMore" class="rm-btn">
        Read More
      </button>
    </el-col>
  </el-row>
</template>

<script>
import API_BASE_URL from "@/api";

export default {
  name: "Summary",
  data() {
    return {
      hovered: false,
      isLiked: false,
      title:'',
      tags:[],
      link:'',
      summary:''
    }
  },
  methods: {
    markLike() {
      if (this.isLiked) {
        console.log('dislike..')
        this.markHistory('dislike')
      } else {
        console.log('like...')
        this.markHistory('like')
      }
      this.isLiked = !this.isLiked;
    },
    readMore() {
      console.log('read more..')
      this.markHistory('readmore')

      window.open(this.link, '_blank')
    },
    getSummary() {
      console.log('summary...')
      let summary_url = API_BASE_URL + '/summary'
      let param = {
          'key': this.$route.params.id
      }

      let userid = 'none'
      if (localStorage.getItem('email') !== null && localStorage.getItem('email') !== '') {
        userid = localStorage.getItem('email');
      }

      this.$axios.get(summary_url, {params: param, headers: {'userid': userid}}).then(res => {
        console.log(res);
        let data = res.data;
        this.title = data.title
        this.tags = data.tags
        this.isLiked = data.liked
        this.link = data.source
        this.summary = data.text
      })

          // ideal structure {username, id, image_url}
          .catch(err => {
            console.log('err');
            console.log('Error: ', err.message);
          });
    },
    markHistory(event) {
      console.log('history..')
      let history_url = API_BASE_URL + '/history'
      let userid = 'none'
      if (localStorage.getItem('email') !== null && localStorage.getItem('email') !== '') {
        userid = localStorage.getItem('email');
      }

      this.$axios.post(history_url, {
        'key': this.$route.params.id,
        'event': event
      }, {
        headers: {'userid': userid}
      }).then(res => {
        console.log(res);
      })
      .catch(err => {
            console.log('err');
            console.log('Error: ', err.message);
          });
    }
  },created() {
    this.getSummary()
    this.markHistory('read')
  }
}
</script>

<style scoped>
.close-btn {
  font-size:20px;
  position:absolute;
  top: 5px;
  right: 0px;
  font-weight:bold;
  background-color:white;
  color:#EC8181;
  border-radius:10px;
  border-style:solid;
  border-color:white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.3)
}
.close-btn:hover {
  background-color: #e7e7e7;
  border-color:#e7e7e7;
}

.rm-btn {
  padding-top:5px;
  font-size:20px;
  font-weight:bold;
  background-color:#Ec8181;
  color:white;
  border-radius:10px;
  border-style:solid;
  border-color:#EC8181;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.3)
}

.rm-btn:hover {
  background-color:#d77474;
  border-color:#d77474;
}
</style>