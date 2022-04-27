<template>
  <div>
    <div class="d-flex justify-content-between fw-bold">
      <h3 class="text-uppercase">{{ name }}</h3>
      <span>{{ price }}</span>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    name: String,
    price: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
p {
  margin-bottom: 70px;
}
h3 {
  font-family: "Bebas Neue", cursive;
}
</style>