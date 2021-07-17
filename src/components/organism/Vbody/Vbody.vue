<template>
  <v-main>
    <v-data-table :headers="columns"></v-data-table>
  </v-main>
</template>

<script>
export default {
  name: "Vbody",
  data() {
    return {
      columns: [
        {
          text: "Name",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
