<template>
  <div>
    <img :src="img" :alt="title" />
    <h3>{{ title }}</h3>
    <div class="line"></div>
    <p>{{ description }}</p>
    <a href="#">{{ linkTitle }}</a>
  </div>
</template>

<script>
export default {
  name: "CardSection",
  props: {
    img: String,
    title: String,
    description: String,
    linkTitle: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
@import "@/assets/style/reset";
div > * {
  margin-bottom: 30px;
  .line {
    width: 60px;
    border-top: 1px solid #d6d6d6;
    margin: auto;
    margin-bottom: 30px;
  }
  a {
    font-family: "Work Sans", sans-serif;
    color: $black;
    padding: 10px 30px;
    border: 1px solid #d6d6d6;
    text-transform: uppercase;
    &:hover {
      background-color: $black;
      color: $white;
    }
  }
}
h3 {
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
}
</style>