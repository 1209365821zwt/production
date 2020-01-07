<template>
  <div class="firstmain">
     <SSwiper :Itemlist="Itemlist"></SSwiper>
    
     <Firstitem show @changedisplay="changedisplay">
        <div class="h1">今日更新</div>
     </Firstitem>

     <Firstshow :ind="ind" @changelist="handchange" v-if="display"></Firstshow>
         <Firstdl :weeklist="weeklist"></Firstdl>     
     <Firstitem active>
        <div class="h1">活动资讯</div>
     </Firstitem>
     <div class="lists">
       <div class="item">
     <Dlist v-for='item in list' :key="item.title" :img="item.img" :title="item.title"></Dlist>
       </div>
       </div>
         <Firstitem>
        <div class="h1">作者阵容</div>
     </Firstitem>
      <Firetswiper :authlist="authlist"></Firetswiper>
      <SFooter></SFooter>
  </div>
</template>

<script>
import Firstitem from './components/Firstitem'
import Firstshow from './components/Firstshow'
import Firstdl from './components/Firstdl'
import BScroll from 'better-scroll'
import Dlist from './components/Dlist'
import Firetswiper from './components/Firstswiper'
import Swiper from 'swiper'
// import { setTimeout } from 'timers'
export default {
 data(){
   return {
     Itemlist:[],
     ind:0,
     weeklist:[],
     list:[],
     scroll:null,
     scrollweek:null,
     authlist:[],
     display:false,
     loading:true
    
   }
 },
 mounted(){
   
 },
 components:{
    Firstitem,
    Firstshow,
    Firstdl,
    Dlist,
    Firetswiper
 },
 created(){
     
   this.$api.main.items().then(res=>{
     this.Itemlist=res.data.data.items
   })
   this.$api.main.week({
     week:this.ind
   }).then(res=>{
     this.weeklist=res.data.data.items;
   this.scrollweek= new BScroll('.firstdl',{
         scrollX: true,
         click:true
     })
      this.scrollweek.refresh()
   })
   this.$api.main.list({
     pageSize:20
   }).then(res=>{
     this.list=res.data.data.items;
    this.scroll= new BScroll('.lists',{
       scrollX: true,
       click:true
     })
     this.scroll.refresh()
   })
   this.$api.main.auth({
     pageSize:6
   }).then(res=>{
    this.authlist=res.data.data.items;
    this.$nextTick(()=>{
     new Swiper('.swiper-container',{
      slidesPerView: 3,
      spaceBetween: 30    
     })
    })
     
   })
 },
 methods:{
   handchange(i){
    this.ind=i;
    this.$api.main.week({
      week:this.ind
    }).then(res=>{
    this.weeklist=res.data.data.items;
    })
   },
   changedisplay(dis){
      this.display=dis
   }
 }
}
</script>

<style lang="scss" scoped>
.firstmain{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.h1{
   width: 170px;
   font-size: 30px;
   height: 60px;
   padding-left: 15px;
   font-weight: bold;
}
.lists{
  width: 90%;
  margin:0 auto;
  height: 400px;
  overflow-x: hidden;
}
.item{
  display: flex;
  width: 8500px;
  height: 400px;
  flex-wrap: nowrap;
}

</style>