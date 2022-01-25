<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>


<script>
// 入口文件
import {onMounted} from 'vue'
export default {
  setup() {
    onMounted(() =>{
      window.document.documentElement.setAttribute(
        "data-theme",
        "cool" // default warm
      );
    })
  }
}
</script>

<style lang="scss">

</style>
