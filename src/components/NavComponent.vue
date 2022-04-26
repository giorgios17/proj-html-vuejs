<template>
  <ul class="d-flex justify-content-center align-items-center">
    <li v-for="(item, index) in navHeader" :key="index">
      <a href="#">{{ item }}</a>
    </li>
    <font-awesome-icon icon="fas fa-shopping-cart" />
  </ul>
</template>

<script>
export default {
  name: "navComponent",
  props: {
    navHeader: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/reset";
@import "@/assets/style/variables";
li {
  margin: 30px;
  a {
    color: $silver;
    &:hover {
      color: $white;
    }
  }
}
</style>