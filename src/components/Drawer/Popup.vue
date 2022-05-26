<template>
  
</template>

<script>
export default {
    data(){
        return {
            rendered : false
        }
    },
    watch: {
        visible(val){
            if (val) {
                console.warn("popup watch!");
            }
        }
    }
}
</script>

<style>

</style>