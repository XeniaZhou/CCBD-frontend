<template>
  <el-row justify="center" style="margin-top: 200px;">
    <el-col :span="8">
      <span style="font-size: 24px;font-weight: bold">You've successfully logged out!</span>
      <br><br>
      <a href="/">
        <button type="button" style="font-weight:normal;background-color:white;color:#838383;border-style:solid;border-color:white;font-size: 14px">
          Back
        </button>
      </a>
    </el-col>
  </el-row>
</template>

<script>
import router from "@/router";
export default {
  name: "Loggedout",
  methods: {
    Logout() {
      localStorage.setItem('code', '');
      router.push({name:'Home'});
      this.$notify({type:"success", text: "Successfully Logout!"});
    }
  },created() {
    this.Logout();

  }
}
</script>

<style scoped>

</style>