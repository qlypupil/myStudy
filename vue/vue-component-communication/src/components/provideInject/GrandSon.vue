<template>
  <div>{{ demo }}</div>
</template>
<script>
export default {
  inject: ['for'],
  data() {
    return {
      demo: this.for,
    };
  },
};
</script>
