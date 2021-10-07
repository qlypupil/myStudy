<template>
  <div>
    <children></children>
  </div>
</template>
<script>
/**
 * provide/reject 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终有效。
 * provide 选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的property。
 * inject 选项应该是一个字符串数组或者一个对象。
 */
import Children from './Children';
export default {
  components: {
    Children,
  },
  provide: {
    for: 'demo',
  },
};
</script>
