<template>
  <div class="home">
    <header z-popper circle>sdf</header>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <a href="">asdfasdf</a>
    <!-- data-theme="default" cool warm -->
    <div>
      <div class="box">one-box</div>
      <div class="text">two-box1</div>
      <div class="box2">three-box2</div>
    </div>
    <div class="box3" circle>66</div>
    <div class="home">
      <div class="home__item1">
        <img src="https://www.baidu.com/link?url=yprp_9FwI6-J4usLm39WsvKa1od8YXIi2jBx-zfMtLwDdwQXulRo84TMbIJNgMu7oZR2ubMY1Wg5d5gpbUniga&wd=&eqid=97de744f00159d840000000361ef9876" alt="">
      </div>
      <div class="home__item2">
        <p>sdfbgsefb阿萨德嘎是尬是电饭煲噶方便撒</p>
      </div>
      <div class="home__item3">88</div>
    </div>
    <balance-two theme="outline" size="24" fill="#333"/>
    <swiper></swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/test/HelloWorld.vue'
import Swiper from '@/components/test/Swiper.vue'
import { BalanceTwo } from '@icon-park/vue-next';
export default {
  name: 'HomeTest',
  components: {
    HelloWorld,
    BalanceTwo,
    Swiper,
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 200px;
  width: 200px;
  background-color: pink;
  color: $color-primary;
  @include box-center(center, center);
}
.box3 {
  height: 50px;
  width: 50px;
  background-color: red;
}

</style>
