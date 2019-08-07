<template>
  <div>
    <count-to :end-val="100">
      <span slot="left">总金额：</span>
      <span slot="right">元</span>
    </count-to>
  </div>
</template>
<script>
import CountTo from "@/components/count-to";
export default {
  name: "count_to",
  components: {
    CountTo
  }
};
</script>
