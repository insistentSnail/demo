<template>
  <div class="tabbar">
    <ul>
      <li v-for="item in tabbarLists" :key="item.id" :class="item.id==activeTab?'active':''" @click="navigation(item)">
        <img :src="item.id==activeTab?item.activeIcon:item.icon" alt="">
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"Tabbar",
  data () {
    return {
      tabbarLists:[
        {
          id:1,
          name:"首页",
          icon:require("@/assets/image/home/home.png"),
          activeIcon:require("@/assets/image/home/homeActive.png"),
          routerName:"Home"
        },
        {
          id:2,
          name:"品类",
          icon:require("@/assets/image/home/activity.png"),
          activeIcon:require("@/assets/image/home/activityActive.png"),
          routerName:"Category"
        },
        {
          id:3,
          name:"购物车",
          icon:require("@/assets/image/home/shop.png"),
          activeIcon:require("@/assets/image/home/shopActive.png"),
          routerName:"Shopcar"
        },
        {
          id:4,
          name:"我的",
          icon:require("@/assets/image/home/my.png"),
          activeIcon:require("@/assets/image/home/myActive.png"),
          routerName:"My"
        }
      ],
      activeTab:1
    }
  },
  methods:{
    navigation(item){
      this.activeTab = item.id
      this.$router.push({name:item.routerName})
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabbar{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    background: #FFFFFF;
    box-shadow: 0px -1px 0px 0px #F5F0F0;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &.active{
          span{
            color: #FE4D4D;
          }
        }
        img{
          width: 20px;
          height: 20px;
        }
        span{
          margin-top: 6px;
          font-size: 10px;
          font-family: PingFangSCMedium;
          font-weight: 400;
          color: #666666;
        }
      }
    }
  }
</style>