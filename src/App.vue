<template>
  <div id="app">
    <div id="nav">

      <!-- <el-button @click="handleClick">element的按钮</el-button>
      <el-button @click="showModal">打开modal</el-button> -->

      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import Modal from "./components/modal";
import ElButton from "element-ui/packages/button/src/button.vue";


export default {
  components: {
    ElButton
  },
  data() {
    return {
      drawerVisible: false,
    };
  },
  methods: {
    handleClick() {
      this.drawerVisible = !this.drawerVisible;
    },
    beforeClose(done) {
      console.warn("close");
      done();
    },
    showModal() {
      Modal.show();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
