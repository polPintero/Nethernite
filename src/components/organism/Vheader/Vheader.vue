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
      @click:clear="clearSearchStr"
      :loading="dataLoading"
    ></v-text-field>
  </v-app-bar>
</template>

<script>
export default {
  name: "Vheader",
  data() {
    return {
      dataLoading: false,
    };
  },
  computed: {
    curSearch() {
      return this.$store.state.searchString;
    },
  },
  methods: {
    async getSearch(e) {
      const searchString = e.target.value;
      if (this.dataLoading || this.curSearch === searchString) return;
      if (!searchString) {
        this.clearSearchStr();
        return;
      }
      this.dataLoading = true;
      this.$store.commit("CLEAR_CACHE");
      this.$store.commit("SET_SEARCH_STRING", searchString);
      await this.$store.dispatch("GET_DATA_SEARCH");
      this.dataLoading = false;
    },
    clearSearchStr() {
      this.$store.commit("SET_SEARCH_STRING", "");
      this.$store.commit("CLEAR_CACHE");
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
