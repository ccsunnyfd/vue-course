<template>
  <div></div>
</template>

<script>
import { getTableData } from "@/api/data";
export default {
  date() {
    return {
      tableData: [],
      columns: [
        { key: "name", title: "姓名" },
        { key: "age", title: "年龄", editable: true },
        { key: "email", title: "邮箱", editable: true }
      ]
    };
  },
  mounted() {
    getTableData().then(res => {
      this.tableData = res;
    });
  }
};
</script>

<style>
</style>


