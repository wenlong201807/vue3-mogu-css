<template>
  <section
    class="c-layout"
    :class="{'c-layout--horizontal': horizontal}">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'CLayout',
  props: {
    horizontal: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
@include b(c-layout) { // block
  display: flex;
  flex-direction: column;
  
  @include e(element) { // 元素样式

  }

  @include m(horizontal) { // modify
    flex-direction: row;
  }
}

// .c-layout {
//   &--horizontal {

//   }
// }
</style>