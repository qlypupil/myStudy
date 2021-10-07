<template>
  <div>
    <child-a></child-a>
    <child-b></child-b>
  </div>
</template>

<script>
import ChildA from './ChildA'; // 导入A组件
import ChildB from './ChildB'; // 导入B组件

export default {
  components: { ChildA, ChildB }, // 注册A、B组件
};
</script>
