<template lang='pug'>
#app
  TestComponent(:message="message")
</template>

<script>
import TestComponent from "./components/TestComponent.vue";

export default {
  name: "App",

  data: function () {
    return {
      message: 'Here we go!'
    };
  },

  components: {
    TestComponent,
  },
}
</script>

<style lang='sass' scoped>
</style>