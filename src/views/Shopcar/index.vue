<template>
  <div class="shopcar">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name:"Shopcar",
  data() {
    return {
      title:"欢迎来到购物车页面"
    }
  },
}
</script>

<style lang="scss" scoped>
  .shopcar{
    overflow: hidden;
    h1{
      margin: 100px auto;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
  }
</style>