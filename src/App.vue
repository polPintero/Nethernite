<template>
  <v-app>
    <Vheader></Vheader>
    <Vbody></Vbody>
    <Vfooter></Vfooter>
  </v-app>
</template>

<script>
import Vheader from "./components/organism/Vheader";
import Vbody from "./components/organism/Vbody";
import Vfooter from "./components/organism/Vfooter";

export default {
  name: "App",
  components: { Vheader, Vbody, Vfooter },
};
</script>
