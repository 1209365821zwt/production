<template>
  <div class="firstitem">
      <slot></slot>
      <div class="check" v-if="show" @click="handdisplay">查看跟多</div>
      <div class="check" v-else-if="active" @click="handclick">查看跟多</div>
      <div class="check" v-else @click="handauth">查看跟多</div>
  </div>
</template>

<script>
export default {
  props:{
      show:{
          type:Boolean,
          default:false
      },
       active:{
          type:Boolean,
          default:false
      },
       display:{
          type:Boolean,
          default:false
      },
  },
  methods:{
      handclick(){
         this.$router.push({
             path:'/detail',
             query:{id:1}
         })
      },
      handdisplay(){
          this.display=!this.display
       this.$emit('changedisplay',this.display)
      },
      handauth(){
           this.$router.push({
             path:'/detail',
             query:{id:2}
         })
      }
  }
}
</script>

<style lang="scss" scoped>
.firstitem{
    width: 90%;
    margin: 0 auto;
    height: 60px;
    display: flex;
    line-height: 60px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
}

.check{
    flex: 1;
    text-align: right;
    padding-right: 25px;
    font-size: 28px;
    color: #ccc;
}
</style>