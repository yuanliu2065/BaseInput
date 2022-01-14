<template>
  <div>
    {{ inputValue }}
    <input :type="type" v-model="inputValue" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      inputValue: null,
    };
  },

  computed: {
    compValue() {
      switch (this.type) {
        case "number":
      }
    },
  },

  methods: {
    handleInput(e) {
      console.log(e.target.value);
    },
  },
};
</script>
