<template>
  <div>
    <child-a></child-a>
    <child-b></child-b>
  </div>
</template>
<script>
import ChildA from './A/ChildA';
import ChildB from './ChildB';
export default {
  components: { ChildA, ChildB },
};
</script>
