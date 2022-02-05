<template>
  <div class="home">
    <base-input
      v-model="input.value"
      :label="input.label"
      type="number"
      message="Aviso importante"
      typeMessage="warning"
    />
    <base-table :table="table" @click="handleIconClick" />
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput.vue";
import BaseTable from "../components/BaseTable.vue";

export default {
  components: { BaseInput, BaseTable },
  data() {
    return {
      input: {
        value: null,
        label: "Nombre",
      },
      table: {
        header: [
          { value: "name", label: "name" },
          { value: "age", label: "age" },
          { value: "job", label: "job" },
        ],
        items: [],
        actions: [
          {
            label: "Edit",
            icon: "fas fa-pen",
            fct: (e) => this.modificarItem(e),
          },
          {
            label: "Delete",
            icon: "fas fa-trash",
            fct: () => this.deleteItem(),
          },
        ],
      },
    };
  },

  mounted() {
    this.table.items = [
      { name: "Tuoli", age: 2, job: "Eat" },
      { name: "Chuanrchuanr", age: 2, job: "Drink" },
      { name: "Jiujia", age: 32, job: "Programador" },
      { name: "Jiujiu", age: 32, job: "Programador" },
    ];
  },

  methods: {
    handleIconClick(fct, filaData) {
      fct(filaData);
    },
    modificarItem(e) {
      console.log("Edit", e);
    },

    deleteItem() {
      console.log("delete");
    },

    handleInput(e) {
      console.log(e.target.value);
    },
  },
};
</script>
