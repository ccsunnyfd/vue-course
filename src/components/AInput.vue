<template>
  <input @input="handleInput" :value="value" />
</template>

<script>
export default {
  name: "AInput",
  props: {
    value: {
      type: [String, Number],
      default: ""
    }
  },
  methods: {
    handleInput() {
      const value = event.target.value;
      this.$emit("input", value); // 强调单向数据流，子组件不应该修改父组件的传值，通过事件传递
    }
  }
};
</script>
