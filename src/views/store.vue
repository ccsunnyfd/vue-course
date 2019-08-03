<template>
  <div>
    <!-- <a-input :value="inputValue" @input="handleInput" /> -->
    <!-- <a-input v-model="inputValue" /> -->
    <a-input @input="handleInput" />
    <!-- <p>{{  inputValue  }}</p> -->
    <a-show :content="inputValue" />
    <p>{{ appName }}</p>
  </div>
</template>
<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";

export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    appName() {
      return this.$store.state.appName;
    }
  },
  methods: {
    // handleInput(val) {
    //   this.inputValue = val;
    // }
    handleInput(val) {
      this.inputValue = val;
    }
  }
};
</script>
