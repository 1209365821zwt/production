<template>
  <div class="dlist">
      <dl>
          <dt>
              <img v-if="img" :src="img" alt="">
              <img v-if="imgs" :src="imgs" alt="" class="imgs">
          </dt>
          <dd>
              <p>{{title}}</p>
          </dd>
      </dl>
     
  </div>
</template>

<script>
export default {
  props:{
      img:{
          type:String
      },
      title:{
          type:String
      },
      imgs:{
           type:String
      }
  }
}
</script>

<style lang="scss" scoped>
.dlist{
    width: 400px;
    flex-shrink: 0;
    margin-right: 20px;
    margin-top: 0;
    dl{
        margin-bottom: 0;
        dt{

            img{
                width: 400px;
                height: 200px;
            }
        }
    }
    dd{
        margin:0;
        width: 100%;
        p{
            width: 100%;
            line-height: 40px;
            font-size: 24px;
            color: #666;
            text-align: center;
        }
    }
}
dt{
    .imgs{
        width: 180px;
        height: 180px;
       border: 1px solid #ccc;
        border-radius: 50%;
    }
}
</style>