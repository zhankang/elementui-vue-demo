<template>
  <div>
    <button @click="fromService">以服务方式启动</button>
    <button @click="unbind">bind toggle</button>
    <button @click="handleClick">开始加载吧</button>
    <div
      v-loading.body="loading"
      :element-loading-text="loading_text"
      v-if="show"
    >
      
    </div>
  </div>

</template>

<script>

import loading from "element-ui/packages/loading/src/index.js"

export default {
  data() {
    return {
      loading: false,
      show: true,
      loading_text : 1
    };
  },
  methods: {
    handleClick() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loading_text++;
      }, 1000);
    },

    unbind() {
      this.show = !this.show;
    },

    fromService(){
      let fullscreen_loading = loading({
        fullscreen : true
      });

      setTimeout(()=>{
        fullscreen_loading.close();
      }, 2000)
    }
  },
};
</script>

<style type="scss" scoped>
div {
  min-height: 200px;
  border: 1px solid red;
}
</style>