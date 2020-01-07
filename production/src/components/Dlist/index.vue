<template>
  <div>
<div class="detail" v-if="production">
      <dl>
          <dt>
              <img :src="img" alt="">
          </dt>
          <dd> 
              <p>{{title}}</p>
              <span>{{new Date(date).toLocaleString()}}</span>
          </dd>
      </dl>
  </div>
  <div class="detailist" v-if="auth">
      <dl>
          <dt>
              <img :src="img" alt="">
          </dt>
          <dd> 
              <p>{{title}}</p>
              <span>{{desc}}</span>
          </dd>
      </dl>
  </div>
  </div>
  
  
</template>

<script>
export default {
 name:'Dlist',
 props:{
     img:{
         type:String
     },
     title:{
         type:String
     },
     date:{
         type:Number
     },
     desc:{
         type:String
     },
     production:{
         type:Boolean
     },
     auth:{
         type:Boolean
     }
 },
 date(){
     return {
     }
 },
 created(){
 },
 methods:{

}
}
</script>

<style lang="scss" scoped>
.detail{
   width: 100%;
   height: 160px; 
}
dl{
    display: flex;
    dt{
        img{
            width: 250px;
            height: 140px;
        }
    }
    dd{
        font-size: 24px;
       flex: 1;
       height: 100px;
        p{
            flex: 1;
            height: 70px;
            line-height: 40px;
        }
        span{
            display: block;
            margin-top: 0;
            width: 100%;
            height: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: pre-wrap;
        }
    }
}
.detailist{
     width: 100%;
   height: 180px; 
   dl{
       display: flex;
       dt{
           width: 300px;
           height: 140px;
           text-align: center;
           img{
               width: 100%;
               height: 100%;
               border-radius: 50%;
               border: 1px solid #ccc;
           }
       }
       dd{
           flex: 1;
           text-align: left;
           height: 100%;
              p{
            width: 100%;
           height: 30px;
            line-height: 40px;
        }
        span{
            display: block;
            margin-top: 0;
            width: 100%;
            height: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: pre-wrap;
        }
       }
   }
}
</style>