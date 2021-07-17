<template>
  <v-app>
    <Vheader></Vheader>
    <v-main>
      <!-- <v-container fluid> </v-container> -->
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
import Vheader from "./components/organism/Vheader";

export default {
  name: "App",
  components: { Vheader },
};
</script>

<style lang="scss"></style>
