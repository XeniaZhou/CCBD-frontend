<template>
  <div class="home">
    <el-row justify="center" style="margin-top: 120px;">
      <el-col :span="6">
        <span style="font-weight:bold;font-size:50px">Some Slogans</span>
        <hr style="width:100%;border:1px solid grey">
        <br><br>
        <a href="https://cu6998final-proj.auth.us-east-1.amazoncognito.com/login?client_id=69evl2jbv3evf93jr1t8jkkn2t&response_type=code&scope=email+openid&redirect_uri=http://localhost:8080/login">
          <button type="button" style="font-size:24px;font-weight:bold;background-color:#EC8181;color:white;border-radius:10px;border-style:solid;border-color:#EC8181;box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);padding:4px 10px">Login</button>
        </a>
      </el-col>
    </el-row>
    <br>
    <br>
    <el-row style="margin-left: 150px;margin-top: 80px;">
      <span style="font-weight:bold;font-size:26px">HEADLINES</span>
    </el-row>
    <el-row v-for="sum in summaries" style="margin-left: 150px;margin-right: 150px;margin-top:20px;background-color:#FFE8E8;padding:60px;border-radius:10px">
      <el-col :span="16" style="text-align:left;">
        <span style="font-weight:bold;font-size:20px">{{sum.title}}</span>
        <br>
        <br>
        <div align="left">
          <div v-for="tag in sum.tags" style="font-size:14px;border-radius:10px;background-color:#8E8E8E;color:white;display:inline-block;margin-right:15px;padding:5px">#
            {{ tag }}</div>
        </div>
      </el-col>
      <el-col :span="8" style="position:relative">
        <button type="button" @click="goToSummary(sum.id)" style="font-size:20px;position:absolute;bottom: 5px;right: 0px;font-weight:bold;background-color:white;color:#EC8181;border-radius:10px;border-style:solid;border-color:white;box-shadow: 0 2px 4px 0 rgba(0,0,0,.3)">Summary</button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import router from "@/router";
export default {
  name: 'Home',
  data() {
    return {
      summaries:[]
    }
  },
  methods: {
    gatherSummaries() {
      this.summaries.push({title:'Google Fiber is launching 5-gig and 8-gig plans early next year',
                            id:'example1',
                          tags:['tag1','tag2']});
    },
    goToSummary(id) {
      router.push({name:'Summary', params: {id: id}})
    }
  },created() {

    this.gatherSummaries();
  }
}
</script>
