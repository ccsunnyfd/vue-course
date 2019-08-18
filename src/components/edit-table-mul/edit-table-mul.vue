<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
import clonedeep from "clonedeep";
export default {
  name: "EditTableMul",
  data() {
    return {
      insideData: [],
      insideColumns: [],
      edittingIdArr: [],
      edittingContent: [[]]
    };
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    columns() {
      this.handleColumns()
    },
    value() {
      this.handleColumns()
    }
  },
  methods: {
    handleClick({ row, index, column }) {
      const edittingId = `${column.key}_${index}`
      // let keyIndex = this.insideData[index].edittingKeyArr ? this.insideData[index].edittingKeyArr.indexOf(columns.key) : -1
      // let rowObj = this.insideData[index]
      const arrPos = this.edittingIdArr.indexOf(`${column.key}_${index}`)
      if (arrPos >= 0) {
        let tableData = clonedeep(this.value);
        tableData[index][column.key] = this.edittingContent[index][column.key];
        this.$emit("input", tableData);
        this.$emit("on-edit", {
          row,
          index,
          column,
          newValue: this.edittingContent[index][column.key]
        });
        // rowObj.edittingKeyArr.splice(keyIndex, 1)
        this.edittingIdArr.splice(arrPos, 1)
      } else {
        // rowObj.edittingKeyArr = (rowObj.edittingKeyArr) ? [...rowObj.edittingKeyArr, column.key] : [column.key]
        // this.insideData.splice(index, 1, rowObj)
        this.edittingIdArr.push(edittingId)
      }
    },
    handleInput({ row, index, column }) {
      this.edittingContent[index][column.key] = '22';
    },
    handleColumns() {
      // this.insideData = clonedeep(this.value)
      const insideColumns = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            // const keyArr = this.insideData[index] ? this.insideData[index].edittingKeyArr : [];
            const isEditting = this.edittingIdArr.indexOf(`${column.key}_${index}`) >= 0;
            return (
              <div>
                {isEditting ? (
                  <i-input
                    value={row[column.key]}
                    style="width: 50px;"
                    on-input={this.handleInput.bind(this, { row, index, column})}
                  ></i-input>
                ) : (
                  <span>{row[column.key]}</span>
                )}
                <i-button
                  on-click={this.handleClick.bind(this, { row, index, column })}
                >
                  {isEditting ? "保存" : "编辑"}
                </i-button>
              </div>
            );
          };
          return item;
        } else {
          return item;
        }
      });
      this.insideColumns = insideColumns;
    }
  },
  mounted() {
    this.handleColumns();
  }
};
</script>

<style>
</style>


