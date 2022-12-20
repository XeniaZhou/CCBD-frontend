<template>
  <notifications position="top center"/>
  <el-affix>
    <div id="navbar" style="background-color:white;width: 100%;height:auto;box-shadow: 0 6px 4px -4px rgba(0,0,0,.3)">
      <el-row style="padding-bottom: 12px;padding-top: 10px;padding-left: 50px;padding-right: 50px">
        <el-col :span="10">
          <!-- <el-input v-model="query" placeholder="Search" style="font-size:20px;height:30px"/> -->
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

export default {
  name: "Layout",
  mounted() {
    window.addEventListener('email-localstorage-changed', (event) => {
      this.email = event.detail.storage;
      console.log(localStorage.getItem('email'));
      if (this.email !== null && this.email !== '') {
        this.dyComponent = LoginLayout;
      } else {
        this.dyComponent = NonLoginLayout;
      }
    });
  },
  data() {
    return {
      query:'',
      dyComponent:NonLoginLayout,
      email: ''
    }

  },
  methods: {
    checkLogin() {
      if (localStorage.getItem('email') !== null && localStorage.getItem('email') !== '') {
        console.log(localStorage.getItem('email'));
        this.dyComponent = LoginLayout;
      } else {
        this.dyComponent = NonLoginLayout;
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
