<template>
  <div class="firstshow">
      <span v-for="(item,index) in numberlist" :key="item" :class="{active:ind==index}" @click="change(index)">{{item}}</span>
  </div>
</template>

<script>
export default {
  props:{
     ind:{
         type:Number,
         default:0
     }
  },
  data(){
      return {
        numberlist:['一','二','三','四','五','六','日'],
       
      }
  },
  methods:{
      change(i){
        this.$emit("changelist",i)
      }
  }
}
</script>

<style lang="scss" scoped>
.firstshow{
    width: 90%;
    margin: 0 auto;
    span{
        display: inline-block;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 1px solid #ccc;
        font-size: 28px;
        line-height: 64px;
        text-align: center;
        margin: 2%;
        &.active{
            background: #e83451;
            color: #fff;
        }
    }
}
</style>