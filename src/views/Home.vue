<template>
  <div class="home">
    <base-input type="number" v-model="input" />
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput.vue";
export default {
  components: { BaseInput },
  data() {
    return {
      input: null,
    };
  },
  methods: {
    handleInput(e) {
      console.log(e.target.value);
    },
  },
};
</script>
