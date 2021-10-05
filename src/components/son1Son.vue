<template>
  <h1>孙子元素 {{foo}}</h1>
</template>

<script>
export default {
    inject:['foo'],
    created(){
        console.log('this.foo',this.foo);
    },
    watch:{
        'foo':function(oldVal,newVal){
               console.log(oldVal,newVal);
        }
    }
}
</script>

<style>

</style>