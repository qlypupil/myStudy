<template>
  <div class="home">
    <router-link to="/propsEmit">props-$mit</router-link> <br />
    <router-link to="/ref">ref-refs</router-link> <br />
    <router-link to="/parentChildren">parent-children</router-link> <br />
    <router-link to="/provideInject">provide-inject</router-link> <br />
    <router-link to="/eventBus">eventBus</router-link> <br />
    <router-link to="/attrsListeners">attrs-listeners</router-link> <br />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>
