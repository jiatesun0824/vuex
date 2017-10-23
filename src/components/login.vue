<template>
  <div class="hello">
    <div>{{text}}</div>
    <button @click='add' style='margin:10px'>add</button><br>
    <button @click='reduce' style='margin:10px'>reduce</button><br>
    <button @click='goMain'>goMain</button>
    <ul>
      <li v-for='item in userList'>{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState(['text','userList']),
  },
  methods: {
    // ...mapActions(['ADDTEXT']),
    ...mapActions({
      reduce:'REDUCETEXT',
      add:'ADDTEXT'
    }),
    goMain(){
      this.$router.push({name:'Main',params:{ip:'haha'},query:{id:100}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
