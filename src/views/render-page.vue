<template>
  <div>
    <list :list="list"></list>
  </div>
</template>
<script>
import List from "_c/list";
export default {
  data() {
    return {
      list: [{ name: "lison" }, { name: "lili" }]
    };
  },
  components: {
    List
  }
};
</script>
