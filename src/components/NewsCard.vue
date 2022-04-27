<template>
  <div class="card-gs text-center">
    <div class="img-container" :style="{ backgroundImage: `url(${img})` }">
      <!-- <img :src="img" :alt="title" /> -->
    </div>
    <h3 class="text-uppercase">{{ title }}</h3>
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
  .img-container {
    height: 600px;
    transition: height 0.2s;
    &:hover {
      height: 700px;
    }
  }

  h3 {
    font-family: "Bebas Neue", cursive;
    font-size: 31px;
    margin-top: 30px;
  }
  p {
    font-size: 12px;
  }
}
</style>