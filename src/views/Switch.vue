<template>
  <div>
    <ELSwitch v-model="value"></ELSwitch>


    <input type="checkbox">
  </div>
</template>

<script>
import Switch from "element-ui/packages/switch/src/component.vue";

export default {
  components: {
    ELSwitch : Switch,
  },
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style>
</style>