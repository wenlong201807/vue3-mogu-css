<template>
  <div class="about">
    <h1>This is an about page</h1>
    <c-row>
      <c-col span="8">span:8</c-col>
      <c-col span="8">span:8</c-col>
      <c-col span="8">span:8</c-col>
    </c-row>
    <!-- 主题样式写法 data-theme="default" cool warm -->
    <div>
      <div class="box">one-box</div>
      <div class="text">two-box1</div>
      <div class="box2">three-box2</div>
    </div>
  </div>
</template>

<script>
// 接口测试
import {getUsers} from '@/api';
import { onMounted, reactive } from 'vue';
export default {
  setup() {
    const data = reactive({
      list: [],
    })
    onMounted(() =>{
      // debugger
      getUsers().then(res => {
        console.info(res);
        data.list = res.data;
      }).catch(e => console.info('接口有错误', e))
    })
  }
}
</script>

<style lang="scss" scoped>

// 主题样式写法
.box {
  @include t-shadow;
}
.text {
  @include t-border;
}
</style>
