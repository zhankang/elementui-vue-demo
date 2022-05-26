<template>
  <div>
    <div>{{type}}</div>

    <hr>

    <Group
      v-model="type"
      ref="group"
    >
      <Radio label="1">type-1</Radio>
      <Radio label="2"></Radio>
    </Group>

    <group v-model="name">
      <RadioButton label="gao"></RadioButton>
      <RadioButton label="zhan"></RadioButton>
    </group>

  </div>
</template>

<script>
import Radio from "element-ui/packages/radio/src/radio.vue";
import RadioButton from "element-ui/packages/radio/src/radio-button.vue";
import Group from "element-ui/packages/radio/src/radio-group.vue";
export default {
  components: {
    Radio,
    Group,
    RadioButton,
  },
  data() {
    return {
      type: "1",
      name: "xin",
    };
  },

  mounted() {
    this.$refs.group.tag = "span";
  },
};
</script>

<style>
</style>