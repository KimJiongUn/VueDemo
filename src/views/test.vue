<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="评分项" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="键名" prop="keyName">
        <el-input v-model="ruleForm.keyName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >添加</el-button
        >
      </el-form-item>
    </el-form>

    <div class="content">
      <div class="pjTitle">服务评价</div>
       <div class="cententInfo" v-for="item in list" :key="item.name">
        <div class="text">{{item.name}}</div>
        <el-rate v-model="item.value" :colors="colors"> </el-rate>
       </div>
      <!-- <div class="cententInfo">
        <div class="text">总体评价</div>
        <el-rate v-model="value2" :colors="colors"> </el-rate>
      </div> -->
    </div>
    <el-button type="success" @click="save">保存</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        keyName: "",
      },
      rules: {
        name: [{ required: true, message: "请输入评分项", trigger: "blur" }],
        keyName: [{ required: true, message: "请输入键名", trigger: "blur" }],
      },
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      list:[{
          name:'总体评价',
          keyName:'overallRate',
          value:0
      },{
          name:'安全驾驶',
          keyName:'safeDriving',
          value:0
      },
      {
          name:'文明服务',
          keyName:'civilizedService',
          value:0
      },
      {
          name:'准时高效',
          keyName:'zsgx',
          value:0
      },
      {
          name:'整洁舒适',
          keyName:'zjss',
          value:0
      }
      ]
    };
  },
  created() {
      this.list = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):this.list
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let obj={
              name:this.ruleForm.name,
              keyName:this.ruleForm.keyName,
              value:0
          }
          this.list.push(obj)
          this.$refs[formName].resetFields()
        } else {
          this.$message.warning('请输入完整信息！')
          return false;
        }
      });
    },
    save(){
        localStorage.setItem('list',JSON.stringify(this.list))
    }
  },
};
</script>

<style scoped>
.container {
  padding: 50px;
}
.container /deep/ .el-form {
  display: flex;
}
.content {
  padding-left: 30px;
  font-size: 14px;
}
.pjTitle {
  font-weight: 700;
}
.cententInfo {
  display: flex;
}
.text {
  margin-right: 10px;
  width: 56px;
}
</style>