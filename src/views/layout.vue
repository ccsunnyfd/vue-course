<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger breakpoint="sm" v-model="collapsed"></Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" @click.native="handleCollapsed" type="md-menu" :size="32" />
        </Header>
        <Content></Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    triggerClasses() {
      return ["trigger-icon", this.collapsed ? "rotate" : ""];
    }
  },
  methods: {
    handleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style lang="less">
.layout-wrapper,
.layout-outer {
  height: 100%;
  .header-wrapper {
    padding: 0 23px;
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    .trigger-icon {
      cursor: pointer;
      transition: transform 0.3s ease;
      &.rotate {
        transform: rotateZ(-90deg);
        transition: transform 0.3s ease;
      }
    }
  }
}
</style>
