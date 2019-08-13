<template>
  <div class="menu-box">
    <a-menu>
        <a-menu-item>1111</a-menu-item>
        <a-menu-item>2222</a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import menuComponents from '_c/menu'
const { AMenu,AMenuItem, ASubmenu } = menuComponents

export default {
  name: 'menu_page',
  components: {
    ...menuComponents
  }
}
</script>
<style lang="less">
.menu-box {
  width: 300px;
  height: 400px;
}
</style>
