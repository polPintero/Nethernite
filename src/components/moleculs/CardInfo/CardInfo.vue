<template>
  <Modal :showModal="showModal" @close="closeModal" class="card-info">
    <v-card color="#385F73" dark>
      <v-card-title class="text-h5">
        {{ pack.name }}

        <v-spacer></v-spacer>

        v.{{ pack.version }}
      </v-card-title>

      <v-divider></v-divider>

      <v-card-subtitle>{{ pack.description }}</v-card-subtitle>

      <v-card-text v-if="pack.author">
        Author: {{ pack.author.name }}
      </v-card-text>

      <v-card-text>
        <SocialLinks :links="pack.links"></SocialLinks>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="closeModal">Close </v-btn>
      </v-card-actions>
    </v-card>
  </Modal>
</template>

<script>
import Modal from "../../atoms/Modal";
import SocialLinks from "../../atoms/SocialLinks";

export default {
  name: "CardInfo",
  components: { Modal, SocialLinks },
  props: {
    data: { type: Object, require: true },
    showModal: { type: Boolean, require: true, default: false },
  },
  data() {
    return {
      pack: {},
    };
  },
  watch: {
    data: {
      deep: true,
      handler(e) {
        this.pack = e.package;
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.card-info {
  .v-overlay__content {
    max-width: 600px;
    width: 90%;
  }
  .v-card__actions {
    justify-content: flex-end;
  }
}
</style>
