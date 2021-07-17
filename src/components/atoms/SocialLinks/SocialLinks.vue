<template>
  <div class="social-links">
    <a
      class="social-links__item"
      target="_blank"
      :href="href"
      v-for="(href, key) in links"
      :title="key"
      :key="key"
    >
      <v-icon>{{ getIcon(key) }}</v-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLinks",
  props: { links: { type: Object } },
  data() {
    return {
      iconList: {
        repository: "mdi-github-box",
        default: "mdi-home",
        npm: "mdi-npm",
        bugs: "mdi-bug",
      },
    };
  },
  methods: {
    getIcon(key) {
      const icon = this.iconList[key];
      if (!icon) return this.iconList.default;
      return icon;
    },
  },
};
</script>

<style lang="scss">
.social-links {
  &__item {
    text-decoration: none;
    margin-right: 12px;
    &:last-child {
      margin-right: 0px;
    }
  }
}
</style>
