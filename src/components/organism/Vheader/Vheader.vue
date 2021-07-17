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
    ></v-text-field>
  </v-app-bar>
</template>

<script>
export default {
  name: "Vheader",
  methods: {
    async getSearch(e) {
      const searchString = e.target.value;
      console.log(searchString)
      const z = await this.$store.dispatch('GET_DATA_SEARCH', searchString);
      // console.log(z);
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
