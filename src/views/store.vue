<template>
  <div>
    <!-- <a-input :value="inputValue" @input="handleInput" /> -->
    <a-input :value="stateValue" @input='handleStateValueChange' />
    <!-- <a-input @input="handleInput" /> -->
    <!-- <p>{{  inputValue  }}</p> -->
    <p>{{  stateValue  }}</p>
    <a-show :content="inputValue" />
    <p>appName: {{ appName }}, appNameWithVersion: {{ appNameWithVersion }}</p>
    <p>userName: {{ userName }}, firstLetter is : {{ firstLetter }}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <button @click="changeUserName">修改用户名</button>
  </div>
</template>
<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
    ...mapState({
      appVersion: state => state.appVersion,
      stateValue: state => state.stateValue
    }),
    ...mapGetters("user", ["firstLetter"]),
    appName() {
      return this.$store.state.appName;
    },
    // appName: {
    //   set: function(newValue) {
    //     this.inputValue = newValue + "sd";
    //   },
    //   get: function() {
    //     return this.inputValue + "sdfsdf";
    //   }
    // }
    // userName() {
    //   return this.$store.state.user.userName;
    // }
    appNameWithVersion() {
      return this.$store.getters.appNameWithVersion;
    }
  },
  methods: {
    ...mapMutations([
      "SET_APP_NAME",
      "SET_USER_NAME",
      "SET_STATE_VALUE"
    ]),
    // handleInput(val) {
    //   this.inputValue = val;
    // }
    ...mapActions(["updateAppName"]),
    handleInput(val) {
      this.inputValue = val;
    },
    handleChangeAppName() {
      // this.$store.commit({
      //   type: "SET_APP_NAME",
      //   appName: "newAppName"
      // });
      // this.SET_APP_NAME({
      //   appName: "newAppName"
      // });
      // this.$store.commit("SET_APP_VERSION");
      this.updateAppName();
    },
    changeUserName() {
      this.SET_USER_NAME("newUserName");
      // this.$store.dispatch('updateAppName', '123')
    },
    handleStateValueChange(val) {
      this.SET_STATE_VALUE(val);
    }
  }
};
</script>
