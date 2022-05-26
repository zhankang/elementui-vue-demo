<template>
  <div>
    <Progress
      :stroke-width="9"
      :percentage="70"
      type="dashboard"
      :width="150"
      :color="[          
          {
              color : 'red',
              percentage : 33
          },
          {
              color : 'green',
              percentage : 66
          }
      ]"
    ></Progress>
  </div>
</template>

<script>
import Progress from "element-ui/packages/progress/src/progress.vue";

export default {
  components: {
    Progress,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>