<template>
  <div class="split-pane-wrapper">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent }">
          <button @click="handleClick">sssss</button>
    </div>
    <div></div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent }"></div>

  </div>
</template>
<script>
export default {
  name: "SplitPane",
  data() {
    return {
      leftOffset: 0.3
    };
  },
  computed: {
    leftOffsetPercent() {
      return `${this.leftOffset * 100}%`;
    }
  },
  methods: {
    handleClick() {
      this.leftOffset -= 0.02;
    }
  }
};
</script>
<style lang="less">
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  .pane {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      background: palevioletred;
    }
    &-right {
      right: 0;
      bottom: 0;
      background: paleturquoise;
    }
  }
}
</style>

