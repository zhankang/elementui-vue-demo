<template>
  <transition name="el-drawer-fade">
    <div
      class="el-drawer__wrapper"
      tabindex="-1"
      v-show="visible"
    >
      <div
        class="el-drawer__container"
        :class="visible && 'el-drawer__open'"
        @click.self="handleWrapperClick"
        role="document"
        tabindex="-1"
      >
        <div
          aria-modal="true"
          aria-labelledby="el-drawer__title"
          class="el-drawer"
          :class="'ltr'"
          style="width: 20%;"
          ref="drawer"
          role="dialog"
          tabindex="-1"
        >
          <section
            class="el-drawer__body"
            v-if="rendered"
          >
            抽屉
          </section>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import Popup from "./Popup.vue"

export default {
  mixins:[Popup],
  data() {
    return {
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    wrapperClosable: {
      type: Boolean,
      default: true,
    },
    beforeClose: {
      type: Function,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 遮罩点击
    handleWrapperClick() {
      if (this.wrapperClosable) {
        this.closeDrawer();
      }
    },
    // 可能需要拦截，所以调用这个关闭方法
    closeDrawer() {
      console.log("closeDrawer");
      if (typeof this.beforeClose === "function") {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    // 确定需要关闭，调用这个方法
    hide(cancel) {
      if (cancel !== false) {
        this.$emit("update:visible", false);
      }
    },
    open(){
      alert(1);
    }
  },
  mounted(){
    this.$emit("open");
  },
  watch : {
    visible(val){
      if (val) {
        this.rendered = true;
        console.warn("drawer watch");
      }
    }
  }
};
</script>

<style>
</style>