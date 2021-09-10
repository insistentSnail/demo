<template>
  <div class="category">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name:"Category",
  data() {
    return {
      title:"欢迎来到分类页面"
    }
  },
}
</script>

<style lang="scss" scoped>
  .category{
    overflow: hidden;
    h1{
      margin: 100px auto;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
  }
</style>