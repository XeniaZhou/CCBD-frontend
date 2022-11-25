<template>
  <el-col :span="2" :offset="10">
    <button type="button" @click="tryLogout" style="font-weight:bold;background-color:white;color:#EC8181;border-style:solid;border-color:white;font-size: 20px">Logout</button>
  </el-col>
  <el-col :span="2">
    <a href="/login">
      <button type="button" style="margin-bottom:5px;padding-top: 5px;text-align:center;font-weight:bold;background-color:#EC8181;color:white;border-radius:10px;border-style:solid;border-color:#EC8181;box-shadow: 0 2px 4px 0 rgba(0,0,0,.3)">
        <el-icon :size="20" style="height:20px;width:20px;"><User /></el-icon>
      </button>
    </a>
  </el-col>
</template>

<script>
export default {
  name: "LoginLayout",
  methods: {
    tryLogout() {
      return
    }
  }
}
</script>

<style scoped>

</style>