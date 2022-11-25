<template>
  <el-row style="margin-left: 150px;margin-right: 150px;margin-top:20px;background-color:#FFE8E8;padding:60px;border-radius:10px">
    <el-col :span="16" style="text-align:left;">
      <span style="font-weight:bold;font-size:20px">{{title}}</span>
      <br>
      <br>
      <div align="left">
        <div v-for="tag in tags" style="font-size:14px;border-radius:10px;background-color:#8E8E8E;color:white;display:inline-block;margin-right:15px;padding:5px">#
          {{ tag }}</div>
      </div>
    </el-col>
    <el-col :span="8" style="position:relative">
      <a href="/">
        <button type="button" style="font-size:20px;position:absolute;top: 5px;right: 0px;font-weight:bold;background-color:white;color:#EC8181;border-radius:10px;border-style:solid;border-color:white;box-shadow: 0 2px 4px 0 rgba(0,0,0,.3)">
          <el-icon style="padding-top: 5px"><CloseBold /></el-icon>
        </button>
      </a>
    </el-col>
  </el-row>
  <el-row style="text-align:left;margin-left: 150px;margin-right: 150px;margin-top:20px">
    {{summary}}
  </el-row>
  <el-row style="margin-left: 150px;margin-right: 150px;margin-top:20px">
    <el-col :span="1">
      <button type="button" @click="markLike" :style="[isLiked ? {'background-color':'#ababab','border': '#ababab'}:{'background-color':'white','border': 'white'}]" style="padding-top:5px;border-radius: 10px;box-shadow: 0 4px 4px 0 rgba(0,0,0,0.3)">
        <el-icon :size="20" style="color: #Ec8181"><Star /></el-icon>
      </button>
      <br>
      <span :style="[isLiked ? {'visibility':'visible'}:{'visibility':'hidden'}]" style="color: #EC8181;">Liked!</span>
    </el-col>
    <el-col :span="4">
      <button type="button" @click="readMore" style="padding-top:5px;font-size:20px;font-weight:bold;background-color:#Ec8181;color:white;border-radius:10px;border-style:solid;border-color:#EC8181;box-shadow: 0 2px 4px 0 rgba(0,0,0,.3)">
        Read More
      </button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Summary",
  data() {
    return {
      isLiked: false,
      title:'Google Fiber is launching 5-gig and 8-gig plans early next year',
      tags:['tag1','tag2'],
      link:'',
      summary:'Google Fiber will offer 5Gbps and 8Gbps tiers starting in early 2023. Both tiers will come with a Wi-Fi 6 router and up to two mesh extenders with professional installation. The 5Gbps tier will cost $125 per month while the 8Gbps tier will cost $150 per month. Google Fiber customers in Utah, Kansas City, or West Des Moines may be able to try out the new tiers as early as next month.'
    }
  },
  methods: {
    markLike() {
      this.isLiked = !this.isLiked;
    },
    readMore() {

    }
  }
}
</script>

<style scoped>

</style>