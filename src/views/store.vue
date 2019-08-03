<template>
  <div>
    <!-- <a-input :value="inputValue" @input="handleInput" /> -->
    <!-- <a-input v-model="inputValue" /> -->
    <a-input @input="handleInput" />
    <!-- <p>{{  inputValue  }}</p> -->
    <a-show :content="inputValue" />
    <p>appName: {{ appName }}</p>
    <!-- <p>{{ userName }}</p> -->
  </div>
</template>
<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";

import { mapState } from "vuex";

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
    ...mapState({
      appName: state => state.appName
    })
    // appName() {
    //   return this.$store.state.appName;
    // },
    // userName() {
    //   return this.$store.state.user.userName;
    // }
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
