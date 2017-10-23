<template>
  <div class='modules'>
      <div class='one'>
        {{one.oneText}}
      </div>
      <div class='two'>
         {{two.twoText}}
      </div>
      <button @click='changeOne' style="margin:10px;">one</button><br>
      <button @click='CHANGETWOTEXT' style="margin:10px;">two</button>      
      <button @click='changeTwoText'>two</button>            
  </div>
</template>
<script> 
import {mapActions,mapMutations,mapState,mapGetters} from 'vuex';
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState(['one','two'])
  },
  methods:{
    changeOne(){
      this.$store.dispatch('CHANGEONETEXT',10)
    },
    ...mapActions(['CHANGETWOTEXT']),
    ...mapMutations(['changeTwoText'])
  }
}
 </script>

<style>
  
</style>