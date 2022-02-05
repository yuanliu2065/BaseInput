<template>
  <div class="base-input">
    <!-- v-model="_value" -->
    <!-- tabindex="-1" -->

    <base-label
      :value="inputId"
      :label="label"
      :is-focused="isFocused"
      :with-value="withValue"
    />
    <input
      :id="inputId"
      class="base-input__box"
      :class="{
        'base-input__box--focused': isFocused,
        'base-input__box--disabled': isDisabled,
      }"
      v-model="_value"
      :type="type"
      :disabled="isDisabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <base-message
      v-if="message"
      :message="message"
      :typeMessage="typeMessage"
    />
    <!-- {{ typeof _value }} {{ _value }} -->
  </div>
</template>

<script>
import BaseLabel from "./BaseLabel.vue";
import BaseMessage from "./BaseMessage.vue";
export default {
  name: "BaseInput",
  components: { BaseLabel, BaseMessage },
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    typeMessage: {
      type: String,
      default: "info",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      inputId: crypto.randomUUID(),
      // inputValue: null,
      isFocused: false,
      withValue: false,
    };
  },

  computed: {
    _value: {
      get() {
        switch (this.type) {
          case "number":
            return Number(this.value) || null;
          default:
            return this.value;
        }
        // return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      },
    },
    // withValue() {
    //   return !!this._value;
    // },
    // compValue() {
    //   switch (this.type) {
    //     case "number":
    //   }
    // },
  },

  methods: {
    handleInput(e) {
      console.log(e);
      this.$emit("input", e.target.value);
      if (e.target.value) this.withValue = true;
      else this.withValue = false;
      // Genera un id único
      // crypto.randomUUID();
    },
    handleFocus(e) {
      // console.log("focus", e);
      this.isFocused = true;
    },
    handleBlur() {
      this.isFocused = false;
    },
  },
};
</script>

<style scoped>
.base-input {
  position: relative;
  height: 40px;
  width: 200px;
  padding-bottom: 20px;
}

.base-input__box {
  height: 40px;
  width: 200px;
  box-sizing: border-box;
  outline: none;
}

.base-input__box--focused {
  /* border-style: solid;
  border-width: 1px;
  border-color: tomato; */
  border: solid 1px tomato;
}

.base-input__box--disabled {
  color: grey;
}

/* Usando >>> podemos acceder a los estilos de los componentes hijos */
/* .base-input__box--disabled >>> .base-label {
  color: tomato;
} */
</style>
