<template>
  <div>
    {{ demo }}
    <grand-son></grand-son>
  </div>
</template>
<script>
import GrandSon from './GrandSon.vue';
export default {
  components: { GrandSon },
  inject: ['for'],
  data() {
    return {
      demo: this.for,
    };
  },
};
</script>
