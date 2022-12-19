<template>
  <el-col :span="2" :offset="10">
    <a href="https://cu6998final-proj.auth.us-east-1.amazoncognito.com/logout?client_id=69evl2jbv3evf93jr1t8jkkn2t&logout_uri=https://d24o7580b1nd6r.cloudfront.net/logout">
      <button type="button" class="logout-btn">Logout</button>
    </a>
  </el-col>
  <el-col :span="2">
    <a href="/me">
      <button type="button" class="prof-btn">
        <el-icon :size="20" style="height:20px;width:20px;"><User /></el-icon>
      </button>
    </a>
  </el-col>
</template>

<script>

export default {
  name: "LoginLayout"
}
</script>

<style scoped>
.prof-btn {
  margin-bottom:5px;
  padding-top: 5px;
  text-align:center;
  font-weight:bold;
  background-color:#EC8181;
  color:white;border-radius:10px;
  border-style:solid;
  border-color:#EC8181;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.3)
}
.prof-btn:hover {
  background-color: #d77474;
  border-color:#d77474;
}
.logout-btn {
  font-weight:bold;
  background-color:white;
  color:#EC8181;
  border-style:solid;
  border-color:white;
  font-size: 20px
}
.logout-btn:hover {
  color:#d77474;
}
</style>