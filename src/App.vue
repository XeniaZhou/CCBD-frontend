<template>
  <el-affix>
    <div id="navbar" style="background-color:white;width: 100%;height:auto;box-shadow: 0 6px 4px -4px rgba(0,0,0,.3)">
      <el-row style="padding-bottom: 12px;padding-top: 10px;padding-left: 50px;padding-right: 50px">
        <el-col :span="10">
          <el-input v-model="query" placeholder="Search" style="font-size:20px;height:30px"/>
        </el-col>
        <component :is=dyComponent></component>
      </el-row>

    </div>
  </el-affix>


  <router-view/>
</template>
<script>
import NonLoginLayout from "@/components/NonLoginLayout";
import LoginLayout from "@/components/LoginLayout";
import UserInfoStore from "@/app/user-info-store";
import UserInfoApi from "@/app/user-info-api";
import auth from '@/app/auth';
export default {
  name: "Layout",
  data() {
    return {
      query:'',
      dyComponent:NonLoginLayout
    }

  },
  methods: {
    checkLogin() {
      if (!auth.auth.isUserSignedIn()) {
        UserInfoStore.setLoggedIn(false);
        this.dyComponent = NonLoginLayout;
      } else {
        UserInfoApi.getUserInfo().then(response => {
          UserInfoStore.setLoggedIn(true);
          UserInfoStore.setCognitoInfo(response);
        });
        this.dyComponent = LoginLayout;
      }
    }
  },created() {
    this.checkLogin();
  }


}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
