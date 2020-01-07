<template>
  <div class="firstdl">
      <div class="list">
        <dl v-for="item in weeklist" :key="item.title" @click="handweeklist(item)">
          <dt>
              <img :src='item.cover' alt="">
          </dt>
          <dd>
              <p class="p">{{item.title}}</p>
              <span class="span">{{item.author_name}}</span>
          </dd>
      </dl>
      </div>
      
  </div>
</template>

<script>
export default {
  props:{
      weeklist:{
          type:Array,
          default:()=>[]
      }
  },
  created(){
  },
  methods:{
      handweeklist(item){
         this.$router.push({
             path:'/Animedetail',
             query:{item:item.id}
         })
      }
  }
}
</script>

<style lang="scss" scoped>
.firstdl{
    width: 90%;
    margin: 0 auto;
    height: 580px;
}
.list{
    width: 1000px;
    display: flex;
    flex-wrap: nowrap;
    dl{
       flex-shrink: 0;
       width: 320px; 
       margin: 1%;
    }
    dd{
        margin-left: 0;
       line-height: 80px;
        .p{
            font-size: 30px;
            line-height: 40px;
            margin: 0;
        }
        .span{
            font-size: 25px;
            color: #ccc;
            margin: 0;
            display: block;
            width: 320px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>