<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu width="auto" theme="dark">
      <template v-for="item in list">
        <re-submenu
         v-if="item.children"
         :key="`menu_${item.name}`"
         :name="item.name"
         :parent="item">
        </re-submenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
          <Icon :type="item.icon" />
          {{ item.title }}
        </menu-item>
      </template>
    </Menu>
    <div></div>
  </div>
</template>
<script>
import ReSubmenu from "./re-submenu.vue";
export default {
  name: "SideMenu",
  components: {
    ReSubmenu
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less">
.side-menu-wrapper {
  width: 100%;
}
</style>
