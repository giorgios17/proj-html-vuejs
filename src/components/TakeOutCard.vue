<template>
  <div class="d-flex">
    <div class="line"></div>
    <div class="text-content">
      <h5 class="text-uppercase">{{ subtitle }}</h5>
      <h1 class="text-uppercase">{{ title }}</h1>
      <p>{{ description }}</p>
      <a href="#"><font-awesome-icon icon="fas fa-car" /> {{ linkText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TakeOutCard",
  props: {
    subtitle: String,
    title: String,
    description: String,
    linkText: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
@import "@/assets/style/reset";
.line {
  width: 100px;
  border-top: 1px solid white;
  margin-top: 60px;
}
.text-content {
  padding: 50px 60px;
  p,
  h1 {
    margin-bottom: 70px;
  }
  h1 {
    font-size: 75px;
    font-family: "Bebas Neue", cursive;
  }
  h5 {
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    margin-bottom: 40px;
  }
  a {
    font-family: "Work Sans", sans-serif;
    text-transform: uppercase;
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