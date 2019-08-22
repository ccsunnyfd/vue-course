<template>
  <Tree :data="folderTree" :render="renderFunc"></Tree>
</template>

<script>
import { putFileInFolder, transferFolderToTree } from "@/lib/util";
export default {
  name: "FolderTree",
  data() {
    return {
      folderTree: [],
      renderFunc: (h, { root, node, data }) => {
        return (
          <div class="tree-item">
            {data.type === "folder" ? (
              <icon
                type="ios-folder"
                color="#2d8cf0"
                style="margin-right: 10px;"
              />
            ) : (
              ""
            )}
            {data.title}
          </div>
        );
      }
    };
  },
  props: {
    folderList: {
      type: Array,
      default: () => []
    },
    fileList: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    folderList() {
      this.transData();
    },
    fileList() {
      this.transData();
    }
  },
  methods: {
    transData() {
      this.folderTree = transferFolderToTree(
        putFileInFolder(this.folderList, this.fileList)
      );
    }
  },
  mounted() {
    this.transData();
  }
};
</script>

<style lang="less">
.tree-item {
  display: inline-block;
  width: ~"calc(100% - 50px)";
  height: 30px;
  line-height: 30px;
}
</style>
