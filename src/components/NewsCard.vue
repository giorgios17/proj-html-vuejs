<template>
  <div class="card-gs text-center">
    <div
      @mouseover="imgHover = true"
      @mouseleave="imgHover = false"
      class="img-container"
      :style="{ backgroundImage: `url(${img})` }"
    >
      <div v-show="imgHover">
        <font-awesome-icon icon="fas fa-link" />
        <h3 class="titleHover text-uppercase">{{ title }}</h3>
        <p>{{ categories }}</p>
      </div>
    </div>
    <div v-show="!imgHover">
      <h3 class="text-uppercase">{{ title }}</h3>
      <p>By {{ author }} | {{ date }} | Categories: {{ categories }}</p>
    </div>
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
  data() {
    return {
      imgHover: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-gs {
  width: calc(100% / 3 - 16px);
  .img-container {
    background-position: top;
    background-repeat: no-repeat;
    height: 600px;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    &:hover {
      height: 680px;
      box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);
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