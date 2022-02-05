<template>
  <tbody>
    <tr v-for="(fila, index) in tableBody.items" :key="index">
      <!-- <td v-for="(celda, index) in getCeldaArray(fila)" :key="index">
        {{ celda }}
      </td> -->
      <td
        v-for="(action, index) in tableBody.actions"
        :key="index"
        @click="handleIconClick(action.fct, fila)"
      >
        <!-- <font-awesome-icon icon="user-secret" /> -->
        <i :class="action.icon" />
      </td>
      <td v-for="column in tableHeader" :key="column.value">
        <span class="base-table__column">{{ fila[column.value] }}</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "BaseTableBody",
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

  methods: {
    handleIconClick(fct, filaData) {
      this.$emit("click", fct, filaData);
    },
  },
};
</script>

<style lang="scss">
.base-table__column {
  display: grid;
  justify-content: start;
}
</style>
