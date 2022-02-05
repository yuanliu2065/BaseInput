<template>
  <label
    class="base-label"
    :class="{
      'base-label--focused': isFocused,
      'base-label--with-value': withValue,
    }"
    :for="value"
  >
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    isFocused: {
      type: Boolean,
      default: false,
    },
    withValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.base-label {
  position: absolute;
  top: 10px;
  left: 5px;
  font-size: 20px;
}

.base-label--focused {
  top: 3px;
  font-size: 10px;
}

.base-label--with-value {
  top: 3px;
  font-size: 10px;
}
</style>
