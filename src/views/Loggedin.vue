<template>
  <el-row justify="center" style="margin-top: 200px;">
    <el-col :span="8">
      <span style="font-size: 24px;font-weight: bold">You've successfully logged in!</span>
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
  name: "Loggedin",
  methods: {
    getCode() {
      if (!localStorage.code) {
        localStorage.setItem('code', router.currentRoute.value.query.code);
        window.dispatchEvent(new CustomEvent('code-localstorage-changed', {
          detail: {
            storage: localStorage.getItem('code')
          }
        }));
      } else {
        localStorage.setItem('code', router.currentRoute.value.query.code);
      }
      console.log(router.currentRoute.value.query.code);
      router.push('/');
      this.$notify({type:"success", text: "Successfully Login!"});

    }
  },created() {
    this.getCode();

  }
}
</script>

<style scoped>

</style>