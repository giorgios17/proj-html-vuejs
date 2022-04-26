<template>
  <div>
    <p class="text-uppercase">{{ name }}</p>
    <h2 class="text-uppercase">{{ journal }}</h2>
    <font-awesome-icon icon="fas fa-star" v-for="item in stars" :key="item" />
    <p>{{ post }}</p>
    <a class="text-uppercase" href="#">{{ linkText }}</a>
  </div>
</template>

<script>
export default {
  name: "CriticCard",
  props: {
    img: String,
    name: String,
    journal: String,
    stars: Number,
    post: String,
    linkText: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
div {
  color: $white;
  padding: 80px 100px;
  & > * {
    margin-bottom: 40px;
  }
  a {
    color: $white;
    padding: 10px 30px;
    border: 1px solid $white;
    text-decoration: none;
    &:hover {
      background-color: $white;
      color: $black;
    }
  }
}
</style>