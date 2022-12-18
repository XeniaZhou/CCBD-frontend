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
import {stringifyQuery} from "vue-router";
export default {
  name: "Loggedin",
  methods: {
    getUsername() {
      let code = router.currentRoute.value.query.code;
      const userinfo_url = 'https://cu6998final-proj.auth.us-east-1.amazoncognito.com/oauth2/userInfo';
      const token_url = 'https://cu6998final-proj.auth.us-east-1.amazoncognito.com/oauth2/token';
      // let auth = 'Basic '+window.btoa('69evl2jbv3evf93jr1t8jkkn2t'+':'+'1unhu1agc23cu367rk1lqkkt98o5ccfbkeh0ddg426m0oe6a4d3i')
      // console.log(window.btoa('69evl2jbv3evf93jr1t8jkkn2t'+':'+'1unhu1agc23cu367rk1lqkkt98o5ccfbkeh0ddg426m0oe6a4d3i'))
      // let client_id = '69evl2jbv3evf93jr1t8jkkn2t';
      // let code = localStorage.getItem('code');
      // let redirect_uri = 'http://localhost:8080/login';
      let requestData = {
        headers: {
          //'Authorization': 'Basic '+ window.btoa('69evl2jbv3evf93jr1t8jkkn2t'+':'+'1unhu1agc23cu367rk1lqkkt98o5ccfbkeh0ddg426m0oe6a4d3i'),
          'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'
        }
      }
      console.log(code);
      let params = {
        "grant_type": "authorization_code",
        "client_id": '69evl2jbv3evf93jr1t8jkkn2t',
        "client_secret": '1unhu1agc23cu367rk1lqkkt98o5ccfbkeh0ddg426m0oe6a4d3i',
        "code": code,
        "redirect_uri": 'http://localhost:8080/login'
      }
      let data = stringifyQuery(params);
      console.log(data);
      this.$axios.post(token_url, data, requestData)
          .then(res => {
            console.log(res)
            let token = res.data.access_token;
            let requestData2 = {
              headers: {
                'Authorization': 'Bearer '+ token
              }
            }
            this.$axios.get(userinfo_url, requestData2).then(response => {
              console.log(response.data);
              if (!localStorage.email) {
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('email_verified', response.data.email_verified);
                window.dispatchEvent(new CustomEvent('email-localstorage-changed', {
                  detail: {
                    storage: localStorage.getItem('email')
                  }
                }));
              } else {
                localStorage.setItem('email', response.data.email);
              }
            });

          })
          .catch(err => {
            console.log('Error: ', err.message);
          });

      console.log(localStorage.getItem('email'));
      router.push('/');
      this.$notify({type:"success", text: "Successfully Login!"});

    }
  },created() {
    this.getUsername();

  }
}
</script>

<style scoped>

</style>