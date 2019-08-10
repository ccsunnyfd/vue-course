<template>
  <div>
    <list :list="list" :style="{color: 'red'}" :render="renderFunc"></list>
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
  },
  methods: {
    renderFunc (h, name) {
      return (
        <i style={{color: 'pink'}}>{name}</i>
      )
    }
  }
};
</script>
