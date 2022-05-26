<template>
  <div>
    <div style="height:1000px;"></div>
    <button @click="toTop">滚到顶上</button>
  </div>
</template>

<script>
import Backtop from "element-ui/packages/backtop/src/main.vue";

export default {
  components: {
    Backtop,
  },
  methods: {
    toTop() {
      let raf = window.requestAnimationFrame;

      let beginTime = Date.now();
      const beginTop = document.documentElement.scrollTop;

      // 设定1秒内完成动作
      function flameFunc() {
        let curTime = Date.now();
        let top = ((1000 - (curTime - beginTime)) * beginTop) / 1000;

        if (top > 0) {
          document.documentElement.scrollTop = top;
          raf(flameFunc);
        } else {
          document.documentElement.scrollTop = 0;
        }
      }

      raf(flameFunc);
    },
  },
};
</script>

<style type="scss" scoped>
button {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>