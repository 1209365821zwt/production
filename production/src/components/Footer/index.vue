<template>
  <div class="footer">
      <div class="footertop">
     <router-link v-for="item in navlist" :key="item.title" tag="span" :to="item.path">{{item.title}}</router-link>
      </div>
     <div class="footercenter">
         <p>北京氪金有限公司</p>
         <p>ICP备案号：京icp16589952号</p>
     </div>
  </div>
</template>

<script>
export default {
 name:'Footer',
 data(){
     return {
         navlist:[
             {
                 path:'/main/first',
                 title:"首页"
             },
             {
                 path:'/main/production',
                 title:'作品列表'
             },
             {
                 path:'/main/authlist',
                 title:'作者阵容'
             }
         ]
     }
 }
}
</script>

<style lang="scss" scoped>
.footer{
  
    color: #a4aebd;
    width: 100%;
    height: 400px;
    background-color: #eeeff0; 
}
.footertop{
   display: flex;
    span{
        flex: 1;
        text-align: center;
        font-size: 28px;
        height: 80px;
        line-height: 80px;       
    }
}
.footercenter{
    width: 100%;
    height: 200px;
    text-align: center;
    margin-top: 40px;
    p{
        font-size: 28px;
        line-height: 40px;
        margin: 0;
    }
}
</style>