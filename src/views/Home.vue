<template>
  <div class="home">
    <header z-popper circle>sdf</header>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <a href="">asdfasdf</a>
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
</style>
