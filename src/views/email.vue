<template>
  <div class="email">
    <button @click="handleClick">按我</button>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$bus);
  },
  methods: {
    handleClick() {
      this.$bus.$emit("on-click", "hello");
    }
  }
};
</script>

<style lang="less">
.email {
  border: 1px solid green;
}
</style>


