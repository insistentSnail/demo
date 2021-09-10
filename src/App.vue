<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <Tabbar/>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
export default {
  name:"App",
  components:{
    Tabbar
  },
  data() {
    return {
      transitionName:"fade"
    }
  },
  watch:{
    $route(to,from){
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      const tabpath=[
        "/",
        "/category",
        "/shopcar",
        "/my"
      ];
      if(
        tabpath.some(ele=>ele==to.path)&&
        tabpath.some(ele=>ele==from.path)
        ){
          // this.transitionName="fade";
          this.transitionName="slide-right";
        }else{
          const toDepth=to.path.split("/").length;
          const fromDepth=from.path.split("/").length;
          this.transitionName=toDepth<fromDepth?"slide-right":"slide-left";//向外跳转右边滑入,向里跳转左边滑入(向里就是一级路由跳二级路由)
        }
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/reset.scss';
  html,
  body {
    width: 100%;
    height: 100%;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active {
    transition:all .2s ease;
  }
  .slide-right-enter{
    opacity: 0;
    transform: translateX(-100%);
  }
  .slide-right-enter-active{
    transition: all .4s ease;
  }
  .slide-left-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .slide-left-enter-active{
    transition: all .4s ease;
  }
</style>
