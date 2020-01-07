<template>
  <div class="header">
    <div class="header-top">
       <div class="img">
         <img src="../../assets/image/icon.jpg" alt="">
       </div>
       <div class="icon" @click="handclick">
         <i class="el-icon-more"></i>
       </div>
       <div>

       </div>
    </div>
    <div class="header-bottom"  v-if="displaylist">
     
         <router-link v-for="(item) in navlist" :key="item.title" :to="item.path" tag="p">{{item.title}}</router-link>
         <router-link v-for="val in list" :key="val.title" tag="span" :to="val.path">{{val.title}}</router-link>
         <span v-if="storage" @click="quit">退出登录</span>
    </div>
    
  </div>
</template>

<script>
export default {
 name:'Header',
 data(){
   return {
     navlist:[
       {
         path:'/main/first',
         title:'首页'
       },
       {
         path:'/main/production',
         title:'作品列表'
       },
       {
         path:'/main/authlist',
         title:'作者阵容'
       },{
         path:'/main/aboutlist',
         title:'关于我们'
       }
     ],
     list:[
       {
         path:'/login',
         title:'登录'
       },
       {
         path:'/register',
         title:'注册新账号'
       }
     ],
     displaylist:false,
     storage:false
   }
 },
 methods:{
   handclick(){
     this.displaylist=!this.displaylist
   },
   quit(){
     window.localStorage.removeItem('token');
     this.$router.push('/login')
   }
 },
 created(){
   const token=window.localStorage.getItem('token');
   if(token){
     this.storage=true
   }else{
     this.storage=false
   }
 }
}
</script>

<style lang='scss' scoped>
.header{
    width: 100%;
    height:70px;
    position: relative;
}
.header-top{
  width: 100%;
  display: flex;
  .img{
    flex:1;
    text-align: left;
    padding: 10px;
    img{
      width: 165px;
      height: 60px;
    }
  }
  .icon{
    width: 80px;
    i{
      padding: 10px;
      display: block;
    }
  }
}
.header-bottom{
  width: 100%;
  height: 340px;
  border-bottom: 1px solid #ccc;
  position: absolute;
  left: 0;
  top: 70px;
  z-index: 1000000;
  background: #fff;
  p{
    color: #ccc;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
  }
  span{
    display: inline-block;
    font-size: 18px;
    color: #ccc;
    padding: 20px;
    height: 40px;
    line-height: 40px;
  }
  &.router-link-active{
    color: #f56;
  }
}

</style>