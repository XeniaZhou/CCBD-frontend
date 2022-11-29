<template>
  <el-row justify="center" style="margin-top: 120px;">
    <el-col :span="6">
      <span style="font-weight:bold;font-size:50px">Some Slogans</span>
      <hr style="width:100%;border:1px solid grey">
      <br><br>
      <a href="https://cu6998final-proj.auth.us-east-1.amazoncognito.com/login?client_id=69evl2jbv3evf93jr1t8jkkn2t&response_type=code&scope=email+openid&redirect_uri=http://localhost:8080/login">
        <button type="button" class="login-btn">Login</button>
      </a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "NonLoginHome"
}
</script>

<style scoped>
.login-btn {
  font-size:24px;
  font-weight:bold;
  background-color:#EC8181;
  color:white;
  border-radius:10px;
  border-style:solid;
  border-color:#EC8181;
  box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);
  padding:4px 10px
}
.login-btn:hover {
  background-color: #d77474;
  border-color:#d77474;
}
</style>