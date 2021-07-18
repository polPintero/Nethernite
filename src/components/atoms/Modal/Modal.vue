<template>
  <v-overlay
    :value="showModal"
    class="v-modal"
    @click.native="handlerClickOnOverlay"
    ref="overlay"
  >
    <slot></slot>
  </v-overlay>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showModal: { type: Boolean, require: true, default: false },
  },
  created() {
    document.addEventListener("keyup", this.hendlerKeyUp);
  },
  methods: {
    handlerClickOnOverlay(e) {
      const { target } = e;
      if (!target.classList.contains("v-overlay__scrim")) return;
      this.closeModal();
    },
    hendlerKeyUp(e) {
      const { key } = e;
      if (key !== "Escape") return;
      this.closeModal();
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss"></style>
