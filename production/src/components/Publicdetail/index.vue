<template>
  <div class="animedetail">
      <dl>
          <dt>
              <img :src="list.cover" alt="">
          </dt>
          <dd>
              <h2>{{list.title}}</h2>
              <div class="update"><span>最近更新</span></div>
              <div class="auth"><span>{{list.author_name}}</span></div>
              <div class="about"><p>关于:{{list.desc}}</p></div>
          </dd>
      </dl>
      <div class="button">
          <div class="read">开始阅读</div>
          <div class="collect" @click="collectclick(list.id)" ref="collect">收藏漫画</div>
      </div>
      <div class="main-catalog">
          <span class="catalog">目录</span>
          <div class="list">
              <span v-for="(item,index) in chapterslist" :key="index" :class="{action:ind==index}" @click="catalogclick(index)">{{item.title}}</span>
          </div>
      </div>
     <div class="main-comment">
          <span class="comment">网友评论</span>
          <div class="comments">
              <Comment :id="list.id"></Comment>
              <dl v-for="val in userlist" :key="val.id">
                  <dt><img v-if="show" :src="'http://www.rigengjihua.cn'+val.user_avatar" alt="">
                  <img :src="val.user_avatar" alt="">
                  </dt>
                  <dd>
                      <div><span>{{val.user_nick}}</span></div>
                      <div><span>{{val.message}}</span></div>
                      <div><span>{{new Date(val.date*1000).toLocaleString()}}</span></div>
                  </dd>
              </dl>
          </div>
      </div>
      
  </div>
</template>

<script>
import Comment from './components/comment'
import {mapMutations,mapActions} from 'vuex'
export default {
  name:'Publicdetail',
  props:{
      list:{
          type:Object,
          default:()=>{}
      },
      userlist:{
          type:Array,
          default:()=>[]
      },
      chapterslist:{
          type:Array,
          default:()=>[]
      }
  },
  data(){
      return {
          ind:0,
          show:true
      }
  },
  components:{
      Comment
  },
  created(){
 this.init()
  },
  methods:{
      ...mapMutations(['setCollect']),
      ...mapActions(['getCollect','getlist']),
    catalogclick(i){
      this.ind=i
    },
    init(){
         this.userlist.forEach(item=>{
      const kk= item.user_avatar.slice(0,5);
       if(kk.includes("http")){
          this.show=true
       }else{
          this.show=false
       }
    })
    },
    collectclick(id){
       this.getCollect({id})
       this.getlist({
           pageSize: 18,
           page: 1,
           finished: 0
       })
       this.$refs.collect.innerHTML="取消收藏"
       this.$router.push('/collect')
    }
  }
}
</script>

<style lang="scss" scoped>
.animedetail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
dl{
    display: flex;
    height: 380px;
    border-bottom: 1px solid #ccc;
    dt{
      width: 30%;
      padding: 20px;
      img{
          width: 200px;
          height: 300px;
      }
    }
    dd{
     flex: 1;
     font-size: 24px;
     margin-left: 0;
     h2{
         height: 33px;
         font-size: 30px;
     }
     .update{
         width: 100%;
         height: 30px;
         line-height: 30px;
         padding-bottom: 10px;
     }
     .auth{
         width: 100%;
         height: 30px;
         line-height: 30px;
     }
     .about{
         width: 100%;
         height: 200px;
         margin-top: 0px;
         p{
             width: 100%;
            height: 200px;
            overflow-y: hidden;
         }
     }
    }
}
.button{
    width: 100%;
    height: 80px;
    line-height: 80px;
    display: flex;
 padding-left: 20px;

    .read{
        width: 35%;
    text-align: center;
    height: 80px;
    padding: 0 30px;
    font-size: 28px;
    line-height: 80px;
    color: #fff;
    float: left;
    display: block;
    text-decoration: none;
    border-radius: 200px;
    background: #d2173e;
    margin-right: 20px;
    }
    .collect{
      width: 35%;
     text-align: center;
    height: 80px;
    padding: 0 30px;
    position: relative;
    font-size: 28px;
    line-height: 80px;
    color: #d2173e;
    border: 2px solid #d2173e;
    display: block;
    float: left;
    overflow: hidden;
    text-decoration: none;
    border-radius: 200px;
    background: transparent;
    }
}
.main-catalog{
    width: 100%;
   flex: 1;
    .catalog{
        display: block;
        width: 100%;
        height: 100px;
        line-height: 100px;
        font-weight: bold;
        font-size:30px; 
        padding-left: 20px;
        border-bottom: 1px solid #ddd;
   
    }
    .list{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-left: 15px;
        box-sizing: border-box;
        span{
            display: block;
            width: 20%;
            flex-shrink: 0;
            border: 1px solid #ccc;
            border-radius:200px;
            font-size: 24px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            margin-top: 15px;
            &.action{
                border: 2px solid #d2173e;
               color: #d2173e;
            }
        }
    }
}
.main-comment{
      width: 100%;
      flex: 1;
    .comment{
     display: block;
        width: 100%;
        height: 100px;
        line-height: 100px;
        font-weight: bold;
        font-size:30px; 
        padding-left: 20px;
        border-bottom: 1px solid #ddd;  
    }
}
</style>