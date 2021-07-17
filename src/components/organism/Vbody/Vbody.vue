<template>
  <v-main class="v-body">
    <v-data-table
      :headers="columns"
      :items="tableData"
      hide-default-footer
      @click:row="showModal"
    ></v-data-table>
    <v-pagination
      v-if="pageCount"
      v-model="currPage"
      :length="pageCount"
      :total-visible="6"
      @input="changePage"
    ></v-pagination>
    <Modal></Modal>
  </v-main>
</template>

<script>
import Modal from "../../moleculs/Modal";
import columns from "./columns";

export default {
  name: "Vbody",
  components: { Modal },
  data() {
    return {
      columns,
      currPage: 1,
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
      return Math.floor(pageData.total / this.$store.state.responseSize);
    },
    tableData() {
      const { pageData } = this;
      if (!pageData) return [];
      return pageData.results;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    changePage(page) {
      this.$store.dispatch("GET_DATA_NEW_PAGE", page);
    },
    showModal(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
.v-body {
  .v-data-table__wrapper {
    tbody {
      cursor: pointer;
    }
  }
}
</style>
