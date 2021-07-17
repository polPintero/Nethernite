<template>
  <v-main>
    <v-data-table
      :headers="columns"
      :items="tableData"
      hide-default-footer
    ></v-data-table>
    <v-pagination
      v-if="pageCount"
      v-model="page"
      :length="pageCount"
      :total-visible="6"
    ></v-pagination>
  </v-main>
</template>

<script>
import columns from "./columns";

export default {
  name: "Vbody",
  data() {
    return {
      columns,
    };
  },
  computed: {
    page() {
      return this.$store.state.page;
    },
    pageData() {
      const { page } = this;
      return this.$store.state.cachePackeges[page];
    },
    pageCount() {
      const { pageData, tableData } = this;
      if (!pageData) return 0;
      return Math.ceil(pageData.total / tableData.length);
    },
    tableData() {
      const { pageData } = this;
      console.log(pageData)
      if (!pageData) return [];
      return pageData.results;
    },
  },
};
</script>

<style lang="scss"></style>
