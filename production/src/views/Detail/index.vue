<template>
  <div>
     <SHeader></SHeader>
     <div class="dlist" v-if="id==1">
         <SDlist  v-for="item in detailist" :key="item.title" :img="item.img" :title="item.title" :date="item.date" production></SDlist>
     </div>
     <div class="btn" @click="handclick" v-if="id==1">
         <p :class="{active:showlist}">加载更多</p>
     </div>
      <div class="dlist" v-if="id==2">
         <SDlist  v-for="item in authdetailist" :key="item.name" :img="item.avatar" :title="item.name" :desc="item.desc" auth></SDlist>
     </div>
     <SFooter v-if="id==2"></SFooter>
  </div>
</template>

<script>

export default {
    data(){
       return {
           pageSize:1,
           page:1,
           detailist:[],
           showlist:false,
           id:0,
           authdetailist:[]
       }
    },
  created(){
     this.id=this.$route.query.id;
     this.$api.main.list({
           pageSize:this.pageSize,
           page:this.page
     }).then(res=>{
         this.detailist=res.data.data.items
     })
    this.$api.main.authlist().then(res=>{
      this.authdetailist=res.data.data.items
    })
    
  },
  methods:{
      handclick(){
          this.page+=1;
          this.pageSize=18;
         this.$api.main.list({
           pageSize:this.pageSize,
           page:this.page
     }).then(res=>{
         const reslist=res.data.data.items;
         this.detailist=[...this.detailist,...reslist];
         if(reslist.length<1){
           this.showlist=true
         }
     })
      }
  }
}
</script>

<style lang="scss" scoped>
.dlist{
    width: 90%;
    margin: 0 auto;
}
.btn{
    width: 100%;
    height: 200px;
    line-height: 200px;
    text-align: center;
    border-top: 2px solid #ccc;
    p{
      border: 2px solid #d2173e;
    border-radius: 14px;
    color: #d2173e;
    width: 25vw;
    margin: 100px auto;
    height: 80px;
    font-size: 28px;
    line-height: 80px;
    box-sizing: border-box;
    background-color: #fff;
    outline: none;
    &.active{
    border: 2px solid #bbb;
    color: #bbb;
    cursor: not-allowed;
    background-color: #eeeff0;
    }
    }
}
</style>