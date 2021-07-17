<template>
  <v-app>
    <Vheader></Vheader>
    <Vbody></Vbody>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
import Vheader from "./components/organism/Vheader";
import Vbody from "./components/organism/Vbody";

export default {
  name: "App",
  components: { Vheader, Vbody },
};
</script>
