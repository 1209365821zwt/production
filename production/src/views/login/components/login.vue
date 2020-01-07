<template>
<div class="formlogin">
  <h1>登录</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item prop="type">
    <el-input type="type" placeholder="邮箱" v-model="ruleForm.type" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item prop="pass">
    <el-input type="password" placeholder="密码"  v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm">注册新账号</el-button>
  </el-form-item>
</el-form>
  <div class="forget" @click="handclick">忘记密码?</div>
</div>

</template>

<script>
export default {
 data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm() {
        const {type,pass} =this.$refs.ruleForm.model;
        this.$api.user.login({
          email:type,
          password:pass
        }).then(res=>{
          if(res.data.code==0){
             window.localStorage.setItem('token',res.headers.connection);
             const path=this.$route.query.redirect || "/main";
             this.$router.replace(path)
          }else{
             this.$router.push('/login')
          }
        })
      },
      resetForm() {
this.$router.push("/register")
      },
      handclick(){
      }
    }
}
</script>

<style lang="scss" scoped>
.formlogin{
  width: 100%;
 margin: 0 auto;
 margin-top: 25px;
}
h1{
 width: 100%;
 height: 80px;
 line-height: 80px;
 font-size: 40px;
 color: #f56;
 font-weight: normal;
  padding-left: 15%;
}
/deep/.el-form-item.el-form-item--feedback::before{
  display:none!important;
 
}
/deep/.el-form-item__content{
  margin:0 auto!important;
  width: 70%;
}
/deep/.el-button.el-button--primary{
  width:45%;
  height: 80px;
  background: #d2173e;
  color: #fff;
  border-radius: 100px;
  border: 4px solid #d2173e
}
/deep/.el-button.el-button--default{
   width:45%;
  height: 80px;
  border-radius: 100px;
    color: #d2173e;
    border: 4px solid #d2173e;
}
.forget{
  width: 100%;
  padding-left: 15%;
  color: #e84c64;
  font-size: 28px;
  margin-top: 30px;
}
</style>