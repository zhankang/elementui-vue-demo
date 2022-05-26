<template>
  <div>
    <div>avatar demo</div>
    <div>
        <Avatar src="https://empty" @error="handleError">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/></Avatar>
    </div>
  </div>
</template>

<script>
import Avatar from "element-ui/packages/avatar/src/main.vue";

export default {
  components: { Avatar },
  methods : {
      handleError(){
          return true;
      }
  }
};
</script>

<style>
</style>