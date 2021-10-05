<template>
   <ul class="options" v-show="showOptions" v-clickOut="test"> //这里使用了下面的自定义指令,并将一个test方法传递进去了
    <li v-for="(item, index) in options" :key="index" @click.stop="choose(item.value)">{{item.value}}</li>
</ul>
</template>

<script>
export default {
    data(){
      return {
          showOptions:true,
          options:[
              {
                  value:'西红柿'
              },
              {
                  value:'鸡蛋'
              }
          ]
      }
    },
  methods:{
      test() {             //test函数,它作为参数传递给了指令
        console.log('这是一个测试函数')
    }
  },
  directives: {              //这里是自定义指令
    clickOut: {             // 这里是自定义的v-clickOut指令
        bind: function(el, binding) {        // bind钩子函数，当它与元素绑定的时候就会执行
            console.log('el===>', el)
            console.log('binding.name===>', binding.name)
            console.log('binding.expression===>', binding.expression)
            console.log('binding.value===>', binding.value)
        }
    }
}
}
</script>

<style>

</style>