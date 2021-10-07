<template>
  <div class="hello-world">
    <div>{{ msg }}</div>
    <children></children>
    <children-copy></children-copy>
    <button @click="changeChildren">点击父组件改变子组件值</button>
  </div>
</template>
<script>
/**
 * 指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。
 * 注意：节制的使用 $parent 和 $children ，它们的主要目的是作为访问组件的应急方法。更推荐使用 props 和 events 实现父子组件通信。
 */
import Children from './Children';
import ChildrenCopy from './ChildrenCopy';
export default {
  components: { Children, ChildrenCopy },
  data() {
    return {
      msg: 'Welcome',
    };
  },
  methods: {
    changeChildren() {
      // 获取到子组件A
      this.$children[0].messageA = 'this is first new value';
      this.$children[1].messageA = 'this is second new value';
    },
  },
};
</script>
