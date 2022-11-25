<template>
<el-row justify="center" style="margin-top: 200px;">
  <el-col :span="8">
    <label for="username" style="font-weight:bold;font-size: 20px"> Username: </label><br>
    <input type="text" id="username" v-model="username" style="font-size:20px;width:100%;background:#FFE8E8;border-color:rgba(131,131,131,0);border-radius:8px;box-shadow:inset 1px 1px 4px rgba(0,0,0,.3)"/>
    <br /><br />
    <label for="password" style="font-weight:bold;font-size: 20px"> Password: </label><br>
    <input type="text" id="password" v-model="password" style="font-size:20px;width:100%;background:#FFE8E8;border-color:rgba(131,131,131,0);border-radius:8px;box-shadow:inset 1px 1px 4px rgba(0,0,0,.3)"/>
    <br><br>
    <br><br>
    <br>
    <button type="button" @click="tryLogin" style="padding-right:15px;padding-left:15px;font-weight:bold;background-color:#EC8181;color:white;border-radius:10px;border-style:solid;border-color:#EC8181;box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);font-size: 20px">
      Login
    </button>
    <br><br>
    <a href="/">
      <button type="button" style="font-weight:normal;background-color:white;color:#838383;border-style:solid;border-color:white;font-size: 14px">
        Cancel
      </button>
    </a>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    tryLogin() {
      return
    }
  }
}
</script>

<style scoped>

</style>