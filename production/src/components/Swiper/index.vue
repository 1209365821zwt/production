<template>
  <div class="swiper">
       <el-carousel>
    <el-carousel-item v-for="item in Itemlist" :key="item.title">
      <img :src="item.img" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name:"Swiper",
  props:{
      Itemlist:{
          type:Array,
          default:()=>[]
      }
  },
  created(){
      console.log(this.Itemlist)
  }
}
</script>

<style>
.swiper{
    width: 100%;
    height: 400px;
}
 .el-carousel.el-carousel--horizontal{
     width: 100%;
     height: 400px;
 }
 .el-carousel__container{
     width: 100%;
     height: 100%;
 }
 img{
     width: 100%;
     height: 400px;
 }
</style>