<template>
  <div class="border">
    <p>age: {{ age }}</p>
    <p>GrandSon: {{ $attrs }}</p>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    age: String,
  },
  created() {
    console.log(this.$attrs);
    // { "gender": "女", "height": "158", "title": "程序员成长指北" }
  },
};
</script>
