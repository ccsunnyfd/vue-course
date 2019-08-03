<template>
  <div>
    <!-- <a-input :value="inputValue" @input="handleInput" /> -->
    <!-- <a-input v-model="inputValue" /> -->
    <a-input @input="handleInput" />
    <!-- <p>{{  inputValue  }}</p> -->
    <a-show :content="inputValue" />
    <!-- <p>appName: {{ appName }}, appNameWithVersion: {{ appNameWithVersion }}</p> -->
    <p>userName: {{ userName }}, firstLetter is : {{ firstLetter }}</p>
  </div>
</template>
<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";

import { mapState, mapGetters } from "vuex";
// const { mapState } = createNamespacedHelpers("user");

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
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    ...mapState("user", {
      userName: state => state.userName
    }),
    ...mapGetters("user", ["firstLetter"]),
    appName() {
      return this.$store.state.appName;
    }
    // userName() {
    //   return this.$store.state.user.userName;
    // }
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
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
