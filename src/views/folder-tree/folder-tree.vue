<template>
  <div class="folder-wrapper">
    <!-- <Tree :data="folderTree" :render="renderFunc"></Tree> -->
    <folder-tree :folder-list="folderList" :file-list="fileList" />
  </div>
</template>

<script>
import { getFolderList, getFileList } from "@/api/data";
import FolderTree from "_c/folder-tree";
export default {
  components: {
    FolderTree
  },
  data() {
    return {
      folderList: [],
      fileList: [],
    };
  },
  mounted() {
    Promise.all([getFolderList(), getFileList()]).then(res => {
      this.folderList = res[0];
      this.fileList = res[1];
    });
  }
};
</script>

<style lang="less">
.folder-wrapper {
  width: 300px;
}
</style>
