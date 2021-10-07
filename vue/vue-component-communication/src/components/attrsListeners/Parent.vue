<template>
  <div>
    <children :name="name" :age="age" :gender="gender" :height="height" title="程序员成长指北"></children>
  </div>
</template>
<script>
/**
 * $attrs与$listeners 是两个对象，$attrs 里存放的是父组件中绑定的非 Props 属性，$listeners里存放的是父组件中绑定的非原生事件。
 */
const Children = () => import('./Children');
export default {
  components: { Children },
  data() {
    return {
      name: 'zhang',
      age: '18',
      gender: '女',
      height: '158',
    };
  },
};
</script>
