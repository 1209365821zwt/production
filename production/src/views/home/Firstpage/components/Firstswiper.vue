<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in authlist" :key="item.name">
            <img :src="item.avatar" alt="">
            <p>{{item.name}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
   props:{
       authlist:{
           type:Array
       }
   },
   created(){
   }
}
</script>

<style lang="scss" scoped>
.swiper-container{
      width:90%;
    height: 400px;
   border-bottom: 1px solid #ccc;
.swiper-wrapper{
    width: 100%;
    height: 100%;
    .swiper-slide{
        width: 240px;
        height: 240px;
        box-sizing: border-box;
                margin-right: 20px;

        img{
            width: 240px;
        height: 240px;
        border-radius: 50%;
        border:1px solid #ccc;
        }
        p{
            color: #ccc;
            font-size: 28px;width: 100%;
            text-align: center;
        }
    }
}
}
</style>