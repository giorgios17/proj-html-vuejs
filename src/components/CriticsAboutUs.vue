<template>
  <div class="container-gs">
    <h2 class="text-center">{{ title }}</h2>
    <div class="row g-0">
      <div class="col-6 leftside">
        <img :src="activeCritic.img" :alt="activeCritic.name" />
      </div>
      <div class="col-6 rightside d-flex justify-content-center">
        <CriticCard
          :name="activeCritic.name"
          :journal="activeCritic.journal"
          :stars="activeCritic.stars"
          :post="activeCritic.post"
          :linkText="activeCritic.linkText"
        />
      </div>
    </div>
    <div class="d-flex gap-5 my-5">
      <CriticCard
        v-for="(item, index) in otherCritics"
        :key="index"
        :img="item.img"
        :name="item.name"
        :journal="item.journal"
        :stars="item.stars"
        :post="item.post"
        :linkText="item.linkText"
      />
    </div>
  </div>
</template>

<script>
// IMPORT COMPONENT
import CriticCard from "./CriticCard.vue";
// IMPORT IMAGES
import meggyStewart from "@/assets/images/blog72x.jpg";
import maryMaxey from "@/assets/images/info52x.jpg";
import patrickMonroe from "@/assets/images/info12x.jpg";
export default {
  name: "CriticsAboutUs",
  components: {
    CriticCard,
  },
  data() {
    return {
      title: "What critics are saying about us",
      activeCritic: {
        img: meggyStewart,
        name: "Meggy Stewart",
        journal: "New York Times",
        stars: 5,
        post: "Non arcu mauyris tortor utrlices mollis tellus eusimod fermentum. Habitant amet tincidunt id sapien accusam sed at. Mmalesuada ullamcorper amet. Pretium pretium dignissim nisi.",
        linkText: "read full article",
      },
      otherCritics: [
        {
          img: maryMaxey,
          name: "Mary Maxey",
          journal: "The Guardian",
          stars: 5,
          post: "Non arcu mauris tortor ultrices mollis tellus euismod fermentum. Habitant amet tincidunt id sapien accumsan sed.",
          linkText: "read full article",
        },
        {
          img: patrickMonroe,
          name: "Patrick Monroe",
          journal: "Globe and Mail",
          stars: 5,
          post: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.",
          linkText: "read full article",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 100px;
}
.row {
  .leftside {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .rightside {
    background-color: black;
  }
}
</style>