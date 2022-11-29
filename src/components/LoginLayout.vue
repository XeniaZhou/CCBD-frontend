<template>
  <el-col :span="2" :offset="10">
    <button type="button" @click="Logout" class="logout-btn">Logout</button>
  </el-col>
  <el-col :span="2">
    <a href="/login">
      <button type="button" class="prof-btn">
        <el-icon :size="20" style="height:20px;width:20px;"><User /></el-icon>
      </button>
    </a>
  </el-col>
</template>

<script>

import router from "@/router";

export default {
  name: "LoginLayout",
  methods: {
    Logout() {
      router.push('/');
      if (localStorage.code && localStorage.getItem('code') !== '') {
        localStorage.setItem('code','');
        window.dispatchEvent(new CustomEvent('code-localstorage-changed', {
          detail: {
            storage: localStorage.getItem('code')
          }
        }));
        this.$notify({type:"success", text: "Successfully Logout!"});
      } else {
        this.$notify({type:"error", text: "You've Logged out!"});
      }
    }
  }
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