<template>
  <div id="app">
      <van-skeleton title :row="13"  :loading='loading'>
    <router-view/>
      </van-skeleton>
  </div>
     


</template>
<script>

export default {
   data(){
     return {
      loading:true
     }
   },
   created(){
      setTimeout(()=>{
        this.loading=false
      },2000)
   }
}
</script>

<style lang="scss">
 html,body{
   width: 100%;
   height: 100%;
   margin: 0;
   padding: 0;
   overflow-x: hidden;
 }
#app{
  width: 100%;
   height: 100%;
}
</style>
