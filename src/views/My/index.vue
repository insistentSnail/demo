<template>
  <div class="my">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name:"My",
  data() {
    return {
      title:"欢迎来到我的页面"
    }
  },
}
</script>

<style lang="scss" scoped>
  .my{
    overflow: hidden;
    h1{
      margin: 100px auto;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
  }
</style>