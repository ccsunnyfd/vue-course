<template>
  <div>
    <list :list="list" :render="renderFunc"></list>
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
      return h('i', {
        style: {
          color: 'pink'
        }
      }, name)
    }
  }
};
</script>
