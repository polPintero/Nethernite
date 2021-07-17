<template>
  <v-footer class="footer">
    <v-row justify="center" no-gutters>
      <a
        href="https://ru.stackoverflow.com/users/271553/%d0%94%d0%bc%d1%8b%d1%82%d1%80%d1%8b%d0%ba"
        target="_blank"
        ><img
          src="https://ru.stackoverflow.com/users/flair/271553.png?theme=clean"
          width="208"
          height="58"
          alt="Профиль участника Дмытрык на сайте «Stack Overflow на русском», Вопросы и ответы для программистов"
          title="Профиль участника Дмытрык на сайте «Stack Overflow на русском», Вопросы и ответы для программистов"
      /></a>
      <a
        class="social-links__item"
        target="_blank"
        href="https://github.com/polPintero"
      >
        <v-icon size="48px">mdi-github-box</v-icon>
      </a>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Vfooter",
};
</script>

<style lang="scss">
.footer {
  .row {
    align-items: center;
    a {
      margin-right: 24px;
    }
  }
}
</style>
