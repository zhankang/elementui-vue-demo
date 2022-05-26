<template>
  <div @click="click1">
      1111111111
      <div @click.self="click2">
          222222222222
          <div @click="click3">
              333333333333
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods : {
        click1(){
            console.warn("click1");
        },
        click2(){
            console.warn("click2");
        },
        click3(){
            console.warn("click3");
        },
    }
}
</script>

<style>

</style>