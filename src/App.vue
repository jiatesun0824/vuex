<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('GETUSER', 1000229)
    // var url =  '/api/organization/employees/detail?userId=1000229' 
    // this.$http.get(url, {
    //   headers: {
    //     Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxMzgxMzgxMzgwMCIsInNjb3BlIjpbIndyaXRlIl0sImV4cCI6MTUwMDEwNjM3MjIwNywidXNlcmlkIjoxLCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJqdGkiOiIxZTQzMTdkMy0wMTFhLTRlYTgtYjQwZC05NTUxMGFhZTg2ODUiLCJ0aWQiOjEsImNsaWVudF9pZCI6IkRPQ1RPUiJ9.rxgsjc73c2ZLnT-PY63NxOxTuZoYsC_t0X3MSoxE9yA'
    //   }
    // }).then((res) => {
    //   console.log(res)
    // })
  },
  watch: {
    $route() {
      console.log(1)
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
