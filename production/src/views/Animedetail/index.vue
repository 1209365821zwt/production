<template>
  <div>
     <SHeader></SHeader> 
     <SPublicdetail :userlist="userlist" :list="list" :chapterslist="chapterslist"></SPublicdetail>
  </div>
</template>

<script>
export default {
    data(){
        return {
           userlist:[],
           list:{},
           chapterslist:[]
        }
    },
 created(){
     this.$api.main.detail({
      id:this.$route.query.item,
      pageSize: 12,
      page: 0,
      type: 0,
     }).then(res=>{
         this.userlist=res.data.data.comments
     })
     this.$api.main.info({
         id:this.$route.query.item,
     }).then(res=>{
         this.list=res.data.data.info,
         this.chapterslist=res.data.data.chapters
     })
 }
}
</script>

<style>

</style>