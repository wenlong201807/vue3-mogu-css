<template>
  <div class="box">
    <div class="box__item  box__item--bg1"></div>
    <div class="box__item  box__item--bg2"></div>
    <div class="box__item  box__item--bg3"></div>
    <div class="box__item  box__item--bg4"></div>
    
  </div>
</template>

<script>
export default {
  name: 'SwiperTest',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  overflow: auto;
  white-space: nowrap;
  scroll-snap-type: x mandatory;

  &__item {
    display: inline-block;
    width: 50%;
    // width: 100%;
    height: 100px;
    background-color: pink;
    scroll-snap-align: center;
    scroll-snap-stop: always; // 每次不管怎么拖动，都必须是一个一个切换

    &--bg1 {
      background-color: green;
    }

    &--bg2 {
      background-color: red;
    }

    &--bg3 {
      background-color: yellow;
    }

    &--bg4 {
      background-color: burlywood;
    }
  }
}

.box__item--bg1 {

}
</style>
