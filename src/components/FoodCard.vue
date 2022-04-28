<template>
  <div class="card-gs d-flex">
    <div class="text-content">
      <div class="d-flex align-items-center">
        <h1 class="text-uppercase">{{ name }}</h1>
        <p>${{ price }}</p>
      </div>
      <div class="line"></div>
      <p>{{ description }}</p>
      <a href="#">View in the menu</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodCard",
  props: {
    name: String,
    price: Number,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
@import "@/assets/style/reset";
.card-gs {
  background-color: black;
  padding: 100px 120px;
  color: white;
  width: 40%;
  .line {
    width: 70px;
    border-top: 0.6px solid white;
    margin-top: 60px;
    margin-bottom: 40px;
  }
  h1 {
    font-size: 70px;
    font-family: "Bebas Neue", cursive;
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
  p {
    margin-bottom: 40px;
  }
}
</style>