<template>
  <div>
    <count-to ref="countTo" :end-val="100">
      <span slot="left">总金额：</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="getNumber">获取数值</button>
  </div>
</template>
<script>
import CountTo from "@/components/count-to";
export default {
  name: "count_to",
  components: {
    CountTo
  },
  methods: {
    getNumber () {
      this.$refs.countTo.getCount()
    }
  }
};
</script>
