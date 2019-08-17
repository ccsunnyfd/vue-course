<template>
  <div class="home">
    <!-- <b>{{ food  }}</b>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button> -->
    <!-- <button @click="getInfo" :style="{ background: bgColor }">请求数据</button> -->
    <!-- <br />
    <img :src="url">
    <button @click="handleLogout">退出登录</button> -->
    <Row>
      <i-col></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="12"></i-col>
      <i-col span="12"></i-col>
    </Row>
    <Row :gutter="10" class="blue">
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
    </Row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getUserInfo } from "@/api/user";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      url: "",
      bgColor: ""
    };
  },
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // console.log(vm);
    });
  },
  beforeRouteLeave(to, from, next) {
    const leave = confirm("您确定要离开吗?");
    if (leave) next();
    else next(false);
  },
  methods: {
    ...mapActions(["logout"]),
    handleClick(type) {
      if (type === "back") this.$router.go(-1);
      else if (type === "push") {
        const name = "lison";
        this.$router.push({
          path: `/argu/${name}`
          // name: "argu",
          // params: {
          //   name: 'lison'
          // }
          // query: {
          //   name: "lison"
          // }
        });
      } else if (type === "replace")
        this.$router.replace({
          name: "parent"
        });
    },
    getInfo() {
      getUserInfo({
        userId: 21
      }).then(res => {
        console.log("res: ", res);
        this.url = res.img;
        this.bgColor = res.color;
      });
    },
    handleLogout() {
      this.logout();
      this.$router.push({
        name: "login"
      });
    }
  }
};
</script>

<style lang="less">
.home {
  .ivu-col {
    height: 50px;
    margin-top: 10px;
    background: pink;
    background-clip: content-box;
  }
  .blue{
    .ivu-col {
      background: blue;
      background-clip: content-box;
    }
  }
}
</style>
