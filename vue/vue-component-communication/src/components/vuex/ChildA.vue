<template>
  <div class="child-a">
    <h2>我是A组件</h2>
    <button @click="transform">点我让B组件接收到数据</button>
    <p>因为你点了B，所以我的信息发生了变化：{{ BMessage }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      AMessage: 'Hello，B组件，我是A组件',
    };
  },
  computed: {
    BMessage() {
      // 这里存储从store里获取的数据
      return this.$store.state.BMsg;
    },
  },
  methods: {
    transform() {
      // 触发 receiveAMsg，将A组件中的数据存放到store中去
      this.$store.commit('receiveAMsg', {
        AMsg: this.AMessage,
      });
    },
  },
};
</script>
