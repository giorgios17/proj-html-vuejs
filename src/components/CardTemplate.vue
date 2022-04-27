<template>
  <div class="leftContent">
    <p class="text-uppercase">{{ table }}</p>
    <h1 class="text-uppercase">{{ title }}</h1>
    <p>{{ description }}</p>
    <a href="#">{{ linkText }}</a>
  </div>
</template>

<script>
export default {
  name: "CardTemplate",
  props: {
    table: String,
    title: String,
    description: String,
    linkText: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
@import "@/assets/style/reset";
.leftContent {
  padding: 50px 60px;
  width: 60%;
  p,
  h1 {
    margin-bottom: 70px;
  }
  h1 {
    font-size: 62px;
    font-weight: bold;
  }
  a {
    color: $white;
    padding: 10px 30px;
    border: 1px solid $white;
    &:hover {
      background-color: $white;
      color: $black;
    }
  }
}
</style>