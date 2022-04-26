<template>
  <div>
    <img :src="img" :alt="title" />
    <h3>{{ title }}</h3>
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
  a {
    color: $black;
    padding: 10px 30px;
    border: 1px solid $silver;
    text-transform: uppercase;
  }
}
h3 {
  padding-bottom: 30px;
  font-weight: bold;
  border-bottom: 1px solid $silver;
  text-transform: uppercase;
}
</style>