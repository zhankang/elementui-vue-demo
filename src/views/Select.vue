<template>
  <div>

    <Select      
      clearable
      v-model="value"
      filterable
      allowCreate
      default-first-option
      reserveKeyword
    >
      <Option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item"
      >
      </Option>
    </Select>    

    <hr>

    <div>{{value}}</div>

  </div>
</template>

<script>
import Select from "element-ui/packages/select/src/select.vue";
import Option from "element-ui/packages/select/src/option.vue";

export default {
  components: {
    Select,
    Option,
  },
  data() {
    return {      
      value: {
        value : 4,
        label : "选项4"
      },
      options: [],
    };
  },
  methods: {},
  mounted() {
    let options = [];
    for (let i = 0; i < 10; i++) {
      options.push({
        value: i,
        label: `选项${i}`,
      });
    }

    this.options = options;
  },
};
</script>

<style>
</style>