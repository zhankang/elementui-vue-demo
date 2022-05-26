<template>
  <div>
      <button @click="next">下一步</button>

      <button @click="modify">修改当前处理状态为错误</button>

      <Steps :active="1" process-status="process" finish-status="success">
          <Step title="步骤 1"></Step>
          <Step title="步骤 2"></Step>
          <Step title="步骤 3"></Step>
      </Steps>


      <div :class="[false, '123', false]"></div>
  </div>
</template>

<script>

import Steps from "element-ui/packages/steps/src/steps.vue"
import Step from "element-ui/packages/steps/src/step.vue"

export default {
    components:{
        Steps,
        Step
    },
    data(){
        return {
            active : 0,
            process : 'process'
        }
    },
    methods:{
        next(){
            this.active++;
        },
        modify(){
            this.process = "error";
        }
    }
}
</script>

<style>

</style>