<template>
  <div class="card-gs">
    <img :src="img" :alt="title" />
    <h3>{{ title }}</h3>
    <p>By {{ author }} | {{ date }} | Categories: {{ categories }}</p>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    title: String,
    img: String,
    author: String,
    date: String,
    categories: String,
  },
};
</script>

<style lang="scss" scoped>
.card-gs {
  width: calc(100% / 3 - 16px);
  img {
    width: 100%;
  }
}
</style>