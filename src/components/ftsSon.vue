<template>
   <div class="ftsSon">
       <h1>{{value}}</h1>
       <el-button @click="contactFather('fAdd')">调用父组件的加</el-button>
       <el-button @click="contactFather('fReduce')">调用父组件的减</el-button>
   </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        value:{
            default:null,
        }
    },
    methods:{
        sonLog(){
            console.log('son log');
        },
        contactFather(fn){
           this.$emit(fn)
        }
    }
}
</script>

<style>

</style>