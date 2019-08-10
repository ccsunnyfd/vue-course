<template>
  <div>
    <list :list="list" :style="{color: 'red'}" :render="renderFunc"></list>
  </div>
</template>
<script>
import List from "_c/list";
import CountTo from '_c/count-to'
export default {
  data() {
    return {
      list: [{ number: 100 }, { number: 45 }]
    };
  },
  components: {
    List
  },
  methods: {
    renderFunc(h, number) {
      return (
        <CountTo endVal={number} style={{ color: "pink" }}>
        </CountTo>
      );
    },
    handleClick(event) {
      console.log(event);
    }
  }
};
</script>
