<template>
  <div>
    <Input
      v-model="value"
      suffix-icon="el-icon-date"
    >
    <span slot="append">输入框</span>
    </Input>
  </div>
</template>

<script>
import Input from "element-ui/packages/input/src/input.vue";

export default {
  components: {
    Input,
  },
  data() {
    return {
      value: "1",
    };
  },
  methods: {
    handleInput(e) {
      this.$nextTick(() => {
        this.value = this.value.replace(/\s*/g, "");
      });
    },
  },
};
</script>

<style>
</style>