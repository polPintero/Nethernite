<template>
  <v-overlay :value="showModal" class="v-modal">
    <v-card color="#385F73" dark>
      <v-card-title class="text-h5"
        >{{ pack.name }} <v-spacer></v-spacer>v.{{ pack.version }}</v-card-title
      >
      <v-divider></v-divider>

      <v-card-subtitle>{{ pack.description }}</v-card-subtitle>
      <v-card-text v-if="pack.author">
        Author: {{ pack.author.name }}
      </v-card-text>

      <v-card-actions>
        <v-btn @click="closeModal">Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: "Modal",
  props: {
    data: { type: Object, require: true },
    showModal: { type: Boolean, require: true, default: false },
  },
  data() {
    return {
      pack: {},
    };
  },
  created() {
    document.addEventListener("keyup", this.hendlerKeyUp);
  },
  watch: {
    data: {
      deep: true,
      handler(e) {
        console.log(e);
        this.pack = e.package;
      },
    },
  },
  methods: {
    hendlerKeyUp(e) {
      const { key } = e;
      if (key !== "Escape") return;
      this.closeModal();
    },
    closeModal() {
      this.$emit("close");
    },
  },
  beforeDestroy() {
    document.removeEventListener("keyup", this.hendlerKeyUp);
  },
};
</script>

<style lang="scss">
.v-modal {
  .v-overlay__content {
    max-width: 600px;
    width: 90%;
  }
}
</style>
