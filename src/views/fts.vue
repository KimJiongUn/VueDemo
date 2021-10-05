<template>
   <div class="fts">
       <h1>父传子</h1>
       <ftsSon ref="ftsSonRef" @fAdd="add" @fReduce="reduce" :value="value1"></ftsSon>
       <el-button @click="add">加</el-button>
       <el-button @click="reduce">减</el-button>
       <el-button @click="revise">修改传给孙子的值</el-button>
       <el-button @click="contactSon">调子组件方法</el-button>
       <son1></son1>
       <son1></son1>
       <son2></son2>
   </div>
</template>

<script>
export default {
   data(){
      return{
         value1:666
      }
   },
   provide:{
     foo:'传值给孙子元素'
   },
   components:{
    ftsSon:()=>import('@/components/ftsSon'),
    son1:()=>import('@/components/son1'),
    son2:()=>import('@/components/son2')
   },
   created(){

   },
   mounted(){

   },
   methods:{
       revise(){
        this.foo='4564564'
        console.log('this.foo',this.foo);
       },
      add(){
       this.value1 += 1
      },
      reduce(){
      this.value1 -= 1
      },
      contactSon(){
          this.$refs.ftsSonRef.sonLog()
      }
   }
}
</script>

<style>

</style>