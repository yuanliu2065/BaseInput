<template>
  <table>
    <base-table-header :table-header="table.header" :table-body="table" />
    <base-table-body
      :table-body="table"
      :table-header="table.header"
      @click="handleIconClick"
    />
  </table>
</template>

<script>
import BaseTableHeader from "../components/BaseTableHeader.vue";
import BaseTableBody from "../components/BaseTableBody.vue";

export default {
  name: "BaseTable",

  components: {
    BaseTableHeader,
    BaseTableBody,
  },

  props: {
    table: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    handleIconClick(fct, filaData) {
      this.$emit("click", fct, filaData);
    },
    getCeldaArray(filaData) {
      let newFilaData = [];
      const header = [...this.table.header];
      const valueHeader = header.map((item) => item.value);

      valueHeader.forEach((header) => {
        newFilaData.push(filaData[header]);
      });

      return newFilaData;
    },
  },
};
</script>
