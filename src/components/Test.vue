<template>
    <div :class='{
        "disabled" : dis
    }'>
        
    </div>
</template>

<script>
export default {
    props : {
        disabled : Boolean
    },
    mounted() {
        console.warn(this.$options.propsData, this.disabled);
    },
    computed : {
        dis(){
            return this.$options.propsData.hasOwnProperty('disabled') ? this.disabled : (this.elForm || {}).disabled;
        }
    }
}
</script>

<style>

</style>