<template>
  <div class="hello">
    <h3>这是父组件传过来的数据，变量和常量</h3>
    <ul>
      <!-- 遍历传递过来的值，然后呈现到页面 -->
      <li v-for="(user, index) in users" :key="index">{{ user }} {{ age }}</li>
    </ul>
    <h3>这是子组件向父组件传值（通过事件模式）</h3>
    <!-- 绑定一个事件 -->
    <h5 @click="changeTitle">开始传递</h5>
    <div>{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: 'PropsEmitChildren',
  props: {
    users: {
      type: Array,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: 'Vue.js Demo',
    };
  },
  methods: {
    changeTitle() {
      //自定义事件  传递值“子向父组件传值”
      this.$emit('titleChanged', '子组件向父组件传值');
    },
  },
};
</script>
