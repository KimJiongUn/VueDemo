<template>
  <div class="son2">son2:{{ value }}</div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
  data() {
    return {
      value: 555,
    };
  },
  created(){
    //   bus.$on('talkBrother',(res)=>{
    //       //console.log('res',res);
    //       this.value = res
    //   })
    this.$bus.$on('talkBrother',(res)=>{
          //console.log('res',res);
          this.value = res
      })
  }
};
</script>

<style>
</style>