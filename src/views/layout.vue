<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider :width="300" collapsible hide-trigger breakpoint="sm" v-model="collapsed">
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" @click.native="handleCollapsed" type="md-menu" :size="32" />
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view />
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import SideMenu from "_c/side-menu";
export default {
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: false,
      menuList: [
        {
          title: "文章管理",
          name: 'menu1',
          icon: "ios-alarm"
        },
        {
          title: "用户管理",
          name: 'menu2',
          icon: "ios-alarm"
        },
        {
          title: "资料库管理",
          name: 'menu3',
          icon: "ios-alarm",
          children: [
            {
              title: "新增资料",
              name: 'menu3-1',
              icon: "ios-alarm"
            },
            {
              title: "资料归档",
              name: 'menu3-2',
              icon: "ios-alarm",
              children: [
                {
                  title: "分级存储归档",
                  name: 'menu3-2-1',
                  icon: "ios-alarm"
                },
                {
                  title: "回收归档",
                  name: 'menu3-2-2',
                  icon: "ios-alarm"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    triggerClasses() {
      return ["trigger-icon", this.collapsed ? "rotate" : ""];
    }
  },
  methods: {
    handleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style lang="less">
.layout-wrapper,
.layout-outer {
  height: 100%;
  .header-wrapper {
    padding: 0 23px;
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    .trigger-icon {
      cursor: pointer;
      transition: transform 0.3s ease;
      &.rotate {
        transform: rotateZ(-90deg);
        transition: transform 0.3s ease;
      }
    }
  }
  .content-con {
    padding: 10px;
  }
  .page-card {
    min-height: ~"calc(100vh - 84px)";
  }
}
</style>
