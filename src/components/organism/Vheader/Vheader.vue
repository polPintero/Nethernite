<template>
  <v-app-bar app class="header">
    <v-text-field
      solo
      label="Search"
      prepend-inner-icon="mdi-file-document-box-search-outline"
      dense
      clearable
      hide-details
      @keydown.enter="getSearch"
      :loading="dataLoading"
    ></v-text-field>
  </v-app-bar>
</template>

<script>
export default {
  name: "Vheader",
  data() {
    return {
      dataLoading: false
    }
  },
  methods: {
    async getSearch(e) {
      if (this.dataLoading) return;
      const searchString = e.target.value;
      this.$store.commit('SET_SEARCH_STRING', searchString);
      if (!searchString) return;
      this.dataLoading = true;
      await this.$store.dispatch('GET_DATA_SEARCH');
      this.dataLoading = false
    },
  },
};
</script>
<style lang="scss">
.header {
  .v-toolbar__content {
    justify-content: flex-end;
  }
  .v-input {
    flex-grow: unset;
    width: 350px;
  }
}
</style>
