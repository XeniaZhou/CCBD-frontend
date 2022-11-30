<template>
  <div style="margin: 80px 150px 0 150px">
    <el-row>
      <el-col :span="4" style="text-align: right">
        <span style="font-weight: bold;font-size: 20px">Username:</span>
      </el-col>
      <el-col :span="6" :offset="2" style="text-align: left">
        <span style="font-size: 20px">{{username}}</span>
      </el-col>
    </el-row>
    <br><br>
    <el-row>
      <el-col :span="4" style="text-align: right">
        <span style="font-weight: bold;font-size: 20px">Email:</span>
      </el-col>
      <el-col :span="6" :offset="2" style="text-align: left">
        <span style="font-size: 20px">{{email}}</span>
      </el-col>
    </el-row>
    <br><br>
    <el-row>
      <el-col :span="4" style="text-align: right">
        <span style="font-weight: bold;font-size: 20px">Email Verified:</span>
      </el-col>
      <el-col :span="6" :offset="2" style="text-align: left">
        <span style="font-size: 20px">{{email_verified}}</span>
      </el-col>
    </el-row>
    <el-row style="margin-top: 60px">
      <el-col :span="1" :offset="15">
        <button type="button" @click="edit" class="edit-btn">Edit
        </button>
      </el-col>
      <el-col :span="3">
        <a href="/">
          <button type="button" class="back-btn">
            Back
          </button>
        </a>

      </el-col>
    </el-row>
  </div>

</template>

<script>
import {stringifyQuery} from "vue-router";
export default {
  name: "Profile",
  data(){
    return {
      username:'',
      email:'',
      email_verified:false
    }
  },
  methods:{
    getInfo() {
      const userinfo_url = 'https://cu6998final-proj.auth.us-east-1.amazoncognito.com/oauth2/userInfo';
      if (localStorage.accessToken && localStorage.getItem('accessToken') !== '') {
        let requestData2 = {
          headers: {
            'Authorization': 'Bearer '+ localStorage.getItem('accessToken')
          }
        }
        this.$axios.get(userinfo_url, requestData2).then(response => {
          console.log(response.data);
          this.username = response.data.username;
          this.email = response.data.email;
          this.email_verified = response.data.email_verified;
        });
      } else {
        let token_url = 'https://cu6998final-proj.auth.us-east-1.amazoncognito.com/oauth2/token';
        // let auth = 'Basic '+window.btoa('69evl2jbv3evf93jr1t8jkkn2t'+':'+'1unhu1agc23cu367rk1lqkkt98o5ccfbkeh0ddg426m0oe6a4d3i')
        // console.log(window.btoa('69evl2jbv3evf93jr1t8jkkn2t'+':'+'1unhu1agc23cu367rk1lqkkt98o5ccfbkeh0ddg426m0oe6a4d3i'))
        // let client_id = '69evl2jbv3evf93jr1t8jkkn2t';
        // let code = localStorage.getItem('code');
        // let redirect_uri = 'http://localhost:8080/login';
        let requestData = {
          headers: {
            //'Authorization': 'Basic '+ window.btoa('69evl2jbv3evf93jr1t8jkkn2t'+':'+'1unhu1agc23cu367rk1lqkkt98o5ccfbkeh0ddg426m0oe6a4d3i'),
            'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'
          }
        }
        console.log(localStorage.getItem('code'));
        let params = {
          "grant_type": "authorization_code",
          "client_id": '69evl2jbv3evf93jr1t8jkkn2t',
          "client_secret": '1unhu1agc23cu367rk1lqkkt98o5ccfbkeh0ddg426m0oe6a4d3i',
          "code": localStorage.getItem('code'),
          "redirect_uri": 'http://localhost:8080/login'
        }
        let data = stringifyQuery(params);
        console.log(data);
        this.$axios.post(token_url, data, requestData)
            .then(res => {
              console.log(res)
              let token = res.data.access_token;
              localStorage.setItem('accessToken', res.data.access_token);
              let requestData2 = {
                headers: {
                  'Authorization': 'Bearer '+ token
                }
              }
              this.$axios.get(userinfo_url, requestData2).then(response => {
                console.log(response.data);
                this.username = response.data.username;
                this.email = response.data.email;
                this.email_verified = response.data.email_verified;
              });

            })
            .catch(err => {
              console.log('Error: ', err.message);
            });
      }


    },
    edit() {

    }
  },created() {
    this.getInfo();
  }
}
</script>

<style scoped>
.edit-btn {
  font-weight:normal;
  background-color:white;
  color: #8f8f8f;
  border-style:solid;
  border-color:white;
  font-size: 20px;
  padding-top: 3px;
}
.edit-btn:hover {
  color:dimgrey;
}

.back-btn {
  padding-right:15px;
  padding-left:15px;
  font-weight:bold;
  background-color:#EC8181;
  color:white;
  border-radius:10px;
  border-style:solid;
  border-color:#EC8181;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);
  font-size: 20px
}
.back-btn:hover {
  background-color:#d77474;
  border-color:#d77474;
}
</style>