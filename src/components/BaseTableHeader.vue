<template>
  <thead>
    <tr>
      <th v-for="action in tableBody.actions" :key="action.label" />
      <th v-for="header in tableHeader" :key="header.value">
        <span class="base-table__header">
          {{ header.label }}
        </span>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "BaseTableHeader",

  props: {
    tableBody: {
      type: Object,
      default: () => {},
    },
    tableHeader: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.base-table__header {
  display: grid;
  justify-content: start;
}
</style>
