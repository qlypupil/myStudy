<template>
  <div class="child">
    <span>{{ messageA }}</span>
    <p>获取到的父组件的值为： {{ parentVal }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messageA: 'this is old',
    };
  },
  computed: {
    parentVal() {
      return this.$parent.msg;
    },
  },
};
</script>
<style lang="scss" scoped>
.child {
  border: 1px solid green;
  span {
    color: green;
  }
  p {
    color: green;
  }
}
</style>
