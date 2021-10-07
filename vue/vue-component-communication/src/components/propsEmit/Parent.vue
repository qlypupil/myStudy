<template>
  <div>
    <!-- 前者自定义名称便于子组件调用，后者要传递数据名 -->
    <!-- 与子组件titleChanged自定义事件保持一致 -->
    <children :users="users" age="18" @titleChanged="updateTitle"></children>
    <!-- updateTitle($event)接受传递过来的文字 -->
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
/**
 * props 只可以从上一级组件传递到下一级组件（父子组件），即所谓的单向数据流。而且 props 只读，不可被修改，所有修改都会失效并警告。
 * $emit 绑定一个事件，当这个语句被执行时，就会将参数传递给父组件，父组件通过 v-on 监听并接收参数。
 */
import Children from '@/components/propsEmit/Children';
export default {
  name: 'PropsEmitParent',
  components: {
    Children,
  },
  data() {
    return {
      users: ['Henry', 'Bucky', 'Emily'],
      title: '传递的是一个值',
    };
  },
  methods: {
    // 声明这个函数
    updateTitle(title) {
      this.title = title;
    },
  },
};
</script>
