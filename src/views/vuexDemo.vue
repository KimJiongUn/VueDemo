<template>
    <div class="containter">
      {{$store.state.name}}
      {{getName}}
      {{newName}}
    <div>
      {{number1}}
      <el-button @click="number1++">加</el-button>
    </div>
    <div>
      {{number2}}
      <el-button @click="number2--">减</el-button>
    </div>
   结果{{result}}
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
          number1:1,
          number2:2
        }
    },
    created(){
          
    },
    async mounted(){
    //  console.log(this.$store.state.name);
    //  console.log('a',this.getNewName);
    // console.log(this.$store.getters.getNewName);
    console.log(this.$store.state.number);
   // this.$store.commit('setNewNum')
     // this.setNewNum({number:777})
    // await this.$store.dispatch('waitSet')
    await this.waitSet()
    console.log(this.$store.state.number);
    },
    computed:{
       getName(){
        return this.$store.state.name
       },
       //...mapState(['name'])
       ...mapState({newName:'name'}),
       ...mapGetters(['getNewName']),
       result(){
         return this.number1 + this.number2
       }
    },
    methods:{
      ...mapMutations(['setNewNum']),
      ...mapActions(['waitSet'])
    }
}
</script>

<style>

</style>