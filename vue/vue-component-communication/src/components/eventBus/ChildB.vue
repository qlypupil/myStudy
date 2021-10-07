<template>
  <div>
    <p>B页面</p>
    <p>{{ msg }}</p>
    <button @click="sendMsgB">B</button>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus';

export default {
  data() {
    return {
      msg: '',
    };
  },
  mounted() {
    EventBus.$on('aMsg', (msg) => {
      // b组件接受 a发送来的消息
      this.msg = msg;
    });
  },
  methods: {
    sendMsgB() {
      EventBus.$emit('bMsg', '来自b页面的消息'); // b发送数据
    },
  },
};
</script>
<style lang="scss" scoped>
p {
  color: green;
}
</style>
