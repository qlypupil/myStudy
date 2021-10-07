<template>
  <div>
    <p>A页面</p>
    <p>{{ msg }}</p>
    <button @click="sendMsgA">A</button>
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
    EventBus.$on('bMsg', (msg) => {
      // a组件接受 b发送来的消息
      this.msg = msg;
    });
  },

  //销毁
  beforeDestroy() {
    //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
    EventBus.$off('bMsg');
  },

  methods: {
    sendMsgA() {
      EventBus.$emit('aMsg', '来自A页面的消息'); // a 发送数据
    },
  },
};
</script>
<style lang="scss" scoped>
p {
  color: red;
}
</style>
