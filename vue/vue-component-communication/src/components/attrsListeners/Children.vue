<template class="border">
  <div>
    <p>name: {{ name }}</p>
    <p>Children的$attrs: {{ $attrs }}</p>
    <grand-son v-bind="$attrs"></grand-son>
  </div>
</template>
<script>
const GrandSon = () => import('./GrandSon.vue');
export default {
  components: {
    GrandSon,
  },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
  props: {
    name: String, // name作为props属性绑定，不包含在 $attrs 中
  },
  created() {
    // 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。
    console.log(this.$attrs);
    // { "age": "18", "gender": "女", "height": "158", "title": "程序员成长指北" }
  },
};
</script>
