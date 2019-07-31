<template>
  <div>
    <!-- {{$route.params.name}} -->
    {{  name  }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "lison"
    }
  }
};
</script>
