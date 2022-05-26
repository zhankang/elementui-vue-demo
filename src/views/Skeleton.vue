<template>
  <div>
      <Skeleton :rows="6" animated :loading="loading">
        <template slot="template">
            <ElSkeletonItem variant="circle"></ElSkeletonItem>
            <ElSkeletonItem variant="p"></ElSkeletonItem>
        </template>

        lalal
      </Skeleton>
  </div>
</template>

<script>

import Skeleton from "element-ui/packages/skeleton/src/index.vue"


export default {
    components:{
        Skeleton
    },
    data(){
        return {
            loading : true
        }
    },
    mounted(){
        setTimeout(()=>{
            this.loading = false;
        }, 2000)
    }
}
</script>

<style>

</style>