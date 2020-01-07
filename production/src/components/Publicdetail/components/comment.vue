<template>
  <div class="branch">
      <dl>
          <dt>
              <img src='http://www.rigengjihua.cn/static/images/user.png' alt="">
          </dt>
          <dd>
              <el-form :model="numberValidateForm" ref="numberValidateForm"  class="demo-ruleForm">
  <el-form-item
    prop="type"
    :rules="[
      { required: true, message: '评论不能为空'},
    ]"
  >
    <el-input type="type" v-model.number="numberValidateForm.type" ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交评论</el-button>
  </el-form-item>
</el-form>
          </dd>
      </dl>
  </div>
</template>

<script>
export default {
 data() {
      return {
        numberValidateForm: {
          type: '',
          
        },
        props:{
          id:{
            type:String
          }
        }
      };
    },
    methods: {
      submitForm() {
        const {type} =this.$refs.numberValidateForm.model;
        console.log(type)
         this.$api.main.new({
           id: this.id,
           message:type,
          parent: 0,
          type: "0"
         }).then(res=>{
           alert(res.data.msg)
         })
      },
    }
}
</script>

<style lang="scss" scoped>
.branch{
    width: 100%;
    height: 300px;
    dl{
        display: flex;
        height: 300px;
        dt{
            width: 20%;
            text-align: center;
            
            img{
             width: 100px;
             height: 100px;
             border-radius: 50%;
             border: 1px solid #ccc;
            }
        }
        dd{
            flex: 1;
            margin-left: 10px;
            .el-textarea{
                width: 80%;
            }
        }
    }
}
</style>