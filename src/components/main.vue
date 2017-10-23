<template>
  <div class='main'>
    <div calss='header'>
      {{text}}
    </div>
    <div class='center'>
      {{this.$route.params.ip}}
    </div>
    <div class='footer'>
      {{this.$route.path}}
    </div>
    <div class='bottom'>
      <img :src="user1.employeeDto.imageUrl" alt="">
    </div>
    <Modules></Modules>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import Modules from './modelus.vue'
export default {
  data() {
    return {

    }
  },
  created() {
  },
  computed: {
    ...mapState(['text', 'user']),
    user1() {
      if (this.$store.state.user) {
        return this.user
      }else{
        return {
          employeeDto:{
            imageUrl:''
          }
        }
      }
    }
  },
  components:{
    Modules
  }


}  
</script>
<style>

</style>
