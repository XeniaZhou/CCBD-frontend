<template>
  <div>
    {{this.content}}
  </div>
</template>

<script>
export default {
  name: "Helloworld",
  data(){
    return {
      content:[]
    }
  },
  methods:{

    demo(){
      this.$axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart")
          .then(res => {
            console.log(res)
            this.content=res;
          })
          .catch(err => {
            console.log('Error: ', err.message);
          });
    }
  },created() {
    this.demo();
  }
}
</script>

<style scoped>

</style>