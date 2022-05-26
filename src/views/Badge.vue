<template>
  <div>
    <div>Badge demo</div>

    <div>
      <Badge :value="10"><button>数量</button></Badge>
    </div>

    <div>
      <button>
        数量 <Badge :value="10"></Badge>
      </button>
    </div>
  </div>
</template>

<script>
import Badge from "element-ui/packages/badge/src/main.vue";

export default {
  components: { Badge },
  methods: {},
};
</script>

<style scoped>
div + div {
  margin-top: 20px;
}
</style>