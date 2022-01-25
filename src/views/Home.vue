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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
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
