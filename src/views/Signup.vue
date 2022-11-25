<template>
  <div style="margin-left: 250px;margin-right: 250px">
    <el-row style="margin-top: 100px">
      <el-col :offset="2" :span="8">
        <span style="font-weight: bold;font-size: 28px">Basic Information</span>
      </el-col>
    </el-row>
    <el-row style="margin-top: 40px;" :gutter="20">
      <el-col :span="9" style="text-align: right">
        <span style="font-weight: bold;font-size: 20px">Username:</span><br><br>
        <span style="font-weight: bold;font-size: 20px">Password:</span><br><br>
        <span style="font-weight: bold;font-size: 20px">Confirm password:</span>
      </el-col>
      <el-col :span="6">
        <input type="text" v-model="username" style="font-size:20px;width:100%;background:#FFE8E8;border-color:rgba(131,131,131,0);border-radius:8px;box-shadow:inset 1px 1px 2px rgba(0,0,0,.3)"/>
        <br><br>
        <input type="text" v-model="password" style="font-size:20px;width:100%;background:#FFE8E8;border-color:rgba(131,131,131,0);border-radius:8px;box-shadow:inset 1px 1px 2px rgba(0,0,0,.3)"/>
        <br><br>
        <input type="text" v-model="confirm_password" style="font-size:20px;width:100%;background:#FFE8E8;border-color:rgba(131,131,131,0);border-radius:8px;box-shadow:inset 1px 1px 2px rgba(0,0,0,.3)"/>
      </el-col>
    </el-row>
    <el-row style="margin-top: 80px">
      <el-col :offset="2" :span="8">
        <span style="font-weight: bold;font-size: 28px">Preferred Topics</span>
      </el-col>
    </el-row>
    <el-row style="margin-top: 40px">
      <el-col :span="5" :offset="4">
        <input type="checkbox" id="entertainment" value="entertainment" v-model="topics">
        <label for="entertainment" class="checkboxtext">Entertainment</label>
      </el-col>
      <el-col :span="5">
        <input type="checkbox" id="sports" value="sports" v-model="topics">
        <label for="sports" class="checkboxtext">Sports</label>
      </el-col>
       <el-col :span="5">
         <input type="checkbox" id="arts" value="arts" v-model="topics">
         <label for="arts" class="checkboxtext">Arts</label>
       </el-col>

    </el-row>
    <br><br>
    <br><br>
    <br>
    <el-row justify="center">
      <el-col :span="8">
        <button type="button" @click="trySignup" style="padding-right:15px;padding-left:15px;font-weight:bold;background-color:#EC8181;color:white;border-radius:10px;border-style:solid;border-color:#EC8181;box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);font-size: 20px">
          Sign up
        </button>
        <br><br>
        <a href="/">
          <button type="button" style="font-weight:normal;background-color:white;color:#838383;border-style:solid;border-color:white;font-size: 14px">
            Cancel
          </button>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      username:'',
      password:'',
      confirm_password:'',
      topics:[]
    }
  },
  methods: {
    trySignup() {

    }
  }
}
</script>

<style scoped>

.checkboxtext
{
  /* Checkbox text */
  font-size: 20px;
  font-weight: bold;
}
</style>