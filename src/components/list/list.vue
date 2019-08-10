<template>
  <ul>
    <li v-for="(item, index) in list" :key="`item_${index}`">
      <span>{{ item.name  }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'list',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
