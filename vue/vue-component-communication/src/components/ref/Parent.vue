<template>
  <div>
    <children ref="children"></children>
  </div>
</template>
<script>
import Children from './Children';

export default {
  components: {
    Children,
  },
  mounted() {
    // ref：如果在普通 DOM 元素上使用，引用指向的是 DOM 元素；如果用在子组件上，引用就指向组件实例。可以通过实例直接调用组件的方法或者访问数据。
    const children = this.$refs.children;
    console.log(children.title);
    children.sayHello();
  },
};
</script>
