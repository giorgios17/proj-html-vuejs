<template>
  <div class="container-gs">
    <h1 class="text-center">{{ title }}</h1>
    <div class="d-flex flex-wrap gap-4 pointer">
      <NewsCard
        v-for="(item, index) in newsPromotions"
        :key="index"
        :img="item.img"
        :title="item.title"
        :author="item.author"
        :date="item.date"
        :categories="item.categories"
      />
    </div>
  </div>
</template>

<script>
//IMPORT COMPONENT
import NewsCard from "@/components/NewsCard.vue";
//IMPORT IMAGES
import caffe from "@/assets/images/blog92x-600x687.jpg";
import newMenu from "@/assets/images/blog72x-600x687.jpg";
import square from "@/assets/images/blog82x-600x687.jpg";

export default {
  name: "NewsAndPromotions",
  components: {
    NewsCard,
  },
  data() {
    return {
      title: "Latest news & promotions",
      newsPromotions: [
        {
          title: "The best coffe in town",
          img: caffe,
          author: "admin",
          date: "January 7th, 2020",
          categories: "News",
        },
        {
          title: "Discover our new menu",
          img: newMenu,
          author: "admin",
          date: "January 7th, 2020",
          categories: "News",
        },
        {
          title: "We now accept square",
          img: square,
          author: "admin",
          date: "January 7th, 2020",
          categories: "News",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-style: italic;
  margin-bottom: 80px;
}
.pointer {
  cursor: pointer;
}
</style>