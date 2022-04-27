<template>
  <div class="containerCritic" :style="{ backgroundImage: `url(${img})` }">
    <h5 class="text-uppercase">{{ name }}</h5>
    <h1 class="text-uppercase">{{ journal }}</h1>
    <font-awesome-icon
      class="me-2"
      icon="fas fa-star"
      v-for="item in stars"
      :key="item"
    />
    <div class="line"></div>
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
.containerCritic {
  background-size: cover;
  background: linear-gradient(rgb(9, 9, 9), rgba(10, 10, 10, 0)), cover;
  color: $white;
  padding: 150px;
  & > * {
    margin-bottom: 28px;
  }
  .line {
    width: 60px;
    border-top: 1px solid #d6d6d6;
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
  h5,
  a {
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
  }
  h1 {
    font-family: "Bebas Neue", cursive;
    font-size: 56px;
  }
}
</style>