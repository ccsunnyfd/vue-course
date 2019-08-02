<template>
  <div>
    <!-- <a-input :value="inputValue" @input="handleInput" /> -->
    <a-input v-model="inputValue" />
    <p>{{  inputValue  }}</p>
  </div>
</template>
<script>
import AInput from "_c/AInput.vue";

export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    AInput
  },
  methods: {
    // handleInput(val) {
    //   this.inputValue = val;
    // }
  }
};
</script>
