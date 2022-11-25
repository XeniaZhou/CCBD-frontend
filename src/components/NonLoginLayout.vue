<template>
  <el-col :span="2" :offset="10">
    <a href="/signup">
      <button type="button" style="font-weight:bold;background-color:white;color:#EC8181;border-style:solid;border-color:white;font-size: 20px">Sign up</button>
    </a>
  </el-col>
  <el-col :span="2">
    <a href="/login">
      <button type="button" style="padding-right:15px;padding-left:15px;font-weight:bold;background-color:#EC8181;color:white;border-radius:10px;border-style:solid;border-color:#EC8181;box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);font-size: 20px">Login</button>
    </a>
  </el-col>
</template>

<script>
export default {
  name: "NonLoginLayout"
}
</script>

<style scoped>

</style>