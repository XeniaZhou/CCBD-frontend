<template>
  <el-col :span="2" :offset="12">
    <a href="https://cu6998final-proj.auth.us-east-1.amazoncognito.com/login?client_id=69evl2jbv3evf93jr1t8jkkn2t&response_type=code&scope=email+openid&redirect_uri=https://d24o7580b1nd6r.cloudfront.net/login">
      <button type="button" class="login-btn">Login</button>
    </a>
  </el-col>
</template>

<script>
export default {
  name: "NonLoginLayout"
}
</script>

<style scoped>
.login-btn {
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
.login-btn:hover {
  background-color:#d77474;
  border-color:#d77474;
}
</style>