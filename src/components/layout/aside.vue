<template>
  <div class="c-aside">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CAside'
}
</script>
<style lang="scss" scoped>
@include b(c-aside) {
  overflow: auto; // 可能内部可以滑动，需要可以滚动，但是又不能超过一屏
  flex-shrink: 0; // 保证不可缩小
}
</style>