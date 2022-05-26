<template>
  <div>
    <div>{{value}}</div>
    <hr>
    <Rate
      :allow-half="true"
      v-model="value"
    ></Rate>
  </div>
</template>

<script>
import Rate from "element-ui/packages/rate/src/main.vue";

export default {
  components: {
    Rate,
  },
  data() {
    return {
      value: null
    };
  },
};
</script>

<style>
</style>