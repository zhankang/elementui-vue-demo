<template>
  <div>
    <Alert title="恭喜！" type="success">light主题：成功一次不容易，且行且珍惜</Alert>
    <hr>
    <Alert title="恭喜！" type="success" effect="dark">dark主题：成功一次不容易，且行且珍惜</Alert>
  </div>
</template>

<script>
import Alert from "element-ui/packages/alert/src/main.vue";

export default {
  components: {
    Alert,
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