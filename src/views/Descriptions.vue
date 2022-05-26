<template>
  <div>
    <el-descriptions title="用户信息" :column="4">
      <el-descriptions-item :span="13" label="用户名"><span slot="label">xxx</span>kooriookami</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        学校
      </el-descriptions-item>
      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import Descriptions from "element-ui/packages/descriptions/src/index.js";
import DescriptionItem from "element-ui/packages/descriptions/src/descriptions-item.js";

export default {
  components: {
    ElDescriptions: Descriptions,
    ElDescriptionsItem: DescriptionItem,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>