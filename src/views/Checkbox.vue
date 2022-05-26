<template>
  <div>
    {{value}}
    <hr>

    <Checkbox
      v-model="value"
      label="apple"
    >苹果</Checkbox>

    <Checkbox
      v-model="value"
      label="banana"
    >香蕉</Checkbox>
  </div>
</template>

<script>
import Checkbox from "element-ui/packages/checkbox/src/checkbox.vue";
import CheckboxGroup from "element-ui/packages/checkbox/src/checkbox-group.vue";

export default {
  components: { Checkbox, CheckboxGroup },
  data() {
    return {
      value: ["orange", "banana"]
    };
  },
};
</script>

<style>
</style>