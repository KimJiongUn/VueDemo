<template>
  <div class="son1">
      <el-button @click="contactBrother">son1</el-button>
      {{value}}
      {{obj.a.b}}

      <h1>son1:{{num}}</h1>
      <el-button @click="num++">numAdd</el-button>
      <son1Son></son1Son>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
      data(){
          return{
              value:666,
              num:8888,
              obj:{
                  a:{
                      b:777
                  }
              }
          }
      },
      components:{
         son1Son:()=> import('@/components/son1Son')
      },
      methods:{
          contactBrother(){
           // bus.$emit('talkBrother','和你说话呢')
           this.$bus.$emit('talkBrother','和你说话呢')
            this.value = '和你说话呢'
            this.obj.a.b=676
          }
      }
}
</script>

<style>

</style>