<template>
  <div>
    <button
      class="trigger"
      ref="trigger"
      @click="toggleShowMenu"
    >下拉菜单</button>

    <transition name="el-zoom-in-top">
      <div
        v-show="visible"
        class="menu"
        ref="menu"
      >
        <ul>
          <li
            v-for="(item, index) in data"
            :key="index"
          >{{item}}</li>
        </ul>
      </div>Z
    </transition>
  </div>
</template>

<script>
const PopperJS = require("element-ui/src/utils/popper.js");

export default {
  data() {
    return {
      data: [1, 2, 3, 4, 5, 6, 7],
      visible: false,
      popperJS: null,
    };
  },

  watch: {
    visible(val) {
      if (val) {
        let menu = this.$refs.menu;
        let select = this.$refs.trigger;

        document.body.appendChild(menu);

        if (!this.popperJS) {
          this.popperJS = new PopperJS(select, menu, {
            placement: "bottom-start",
            gpuAcceleration: false,
          });
        } else {
          this.popperJS.update();
        }
      }
    },
  },

  methods: {
    toggleShowMenu() {
      this.visible = !this.visible;
    },
    changeData() {
      this.data.push(Date.now());
      this.popperJS.update();
    },
  },
};
</script>

<style type="scss" scoped>
.menu {
  min-width: 200px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}
</style>