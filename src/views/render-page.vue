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
    renderFunc(h, name) {
      return (
        <i on-click={this.handleClick} style={{ color: "pink" }}>
          {name}
        </i>
      );
    },
    handleClick(event) {
      console.log(event);
    }
  }
};
</script>
