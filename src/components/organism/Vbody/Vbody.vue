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
    <CardInfo
      :showModal="isShowModal"
      :data="dataForModal"
      @close="closeModal"
    ></CardInfo>
  </v-main>
</template>

<script>
import CardInfo from "../../moleculs/CardInfo";
import columns from "./columns";

export default {
  name: "Vbody",
  components: { CardInfo },
  data() {
    return {
      columns,
      currPage: 1,
      dataForModal: {},
      isShowModal: false,
    };
  },
  computed: {
    page() {
      return this.$store.state.page;
    },
    pageCount() {
      const { tableData } = this;
      if (!tableData) return 0;
      const count = Math.floor(
        tableData.total / this.$store.state.responseSize
      );
      // max page size https://api-docs.npms.io/
      return count < 1000 ? count : 999;
    },
    tableData() {
      return this.$store.state.tableData.results;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  watch: {
    page(e) {
      this.currPage = e;
    },
  },
  methods: {
    changePage(page) {
      this.$store.dispatch("GET_DATA_NEW_PAGE", page);
    },
    showModal(e) {
      const selection = window.getSelection().toString();
      if (selection.length > 0) return;
      this.dataForModal = e;
      this.openModal();
    },
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
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
  .v-data-table {
    margin: 0 auto;
    max-width: 1900px;
  }
}
</style>
