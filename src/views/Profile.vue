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
      <el-col :span="3" :offset="16">
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
import router from "@/router";
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
      if (localStorage.email && localStorage.getItem('email') !== '') {

          this.username = localStorage.getItem('username');
          this.email = localStorage.getItem('email');
          this.email_verified = localStorage.getItem('email_verified');
      } else {
          router.push('/');
          this.$notify({type:"error", text: "Please Login First!"})
      }


    }
  },created() {
    this.getInfo();
  }
}
</script>

<style scoped>
/*.edit-btn {*/
/*  font-weight:normal;*/
/*  background-color:white;*/
/*  color: #8f8f8f;*/
/*  border-style:solid;*/
/*  border-color:white;*/
/*  font-size: 20px;*/
/*  padding-top: 3px;*/
/*}*/
/*.edit-btn:hover {*/
/*  color:dimgrey;*/
/*}*/

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