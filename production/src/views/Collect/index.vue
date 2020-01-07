<template>
  <div class="collect">
      <SHeader></SHeader>
      <div class="child">
           <dl v-for="item in collect" :key="item.title">
        <dt>
            <img :src="item.cover" alt="">
        </dt>
        <dd>
            <div>{{item.title}}</div>
            <span>{{item.author_name}}</span>
        </dd>
    </dl>
      </div>
    <SFooter></SFooter>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
      return {
          
      }
    },
  computed:{
    ...mapState(['collect'])
  }
}
</script>

<style lang="scss" scoped>
.collect{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.child{
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
dl{
    // width: 100%;
    flex-shrink: 0;
    width: 40%;
    dt{
        width: 100%;
        img{
        width: 100%;
        height: 400px;
        }
       
    }
    dd{
        font-size: 28px;
        margin-top: 0;
       margin-left: 0;
    }
}
</style>