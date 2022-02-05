<template>
  <span class="base-message" :class="`base-message--${typeMessage}`">
    {{ message }}
  </span>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: null,
    },
    typeMessage: {
      type: String,
      default: "info",
    },
  },
};
</script>

<style scoped>
.base-message {
  font-size: 10px;
  display: flex;
}
.base-message--info {
  color: blue;
}
.base-message--warning {
  color: green;
}
.base-message--error {
  color: red;
}
</style>
