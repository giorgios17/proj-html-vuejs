<template>
  <div class="container-gs">
    <div class="row">
      <!-- leftside -->
      <div class="col-6 leftside">
        <p>{{ lorem1 }}</p>
        <h2>{{ lorem2 }}</h2>
        <p>{{ lorem3 }}</p>
        <img src="../assets/images/signature-200x172.jpg" alt="signature" />
      </div>
      <!-- rightside -->
      <div class="col-6 rightside">
        <img src="../assets/images/info22x.jpg" alt="info22" />
      </div>
    </div>
    <div class="d-flex text-center gap-5 mt-5">
      <SushiCard
        v-for="(item, index) in foodType"
        :key="index"
        :img="item.img"
        :title="item.title"
        :description="item.description"
        :linkTitle="item.linkTitle"
      />
    </div>
  </div>
</template>

<script>
// IMPORT COMPONENT
import SushiCard from "./SushiCard.vue";
// IMPORT IMAGES
import Sushi1 from "@/assets/sushi-1.png";
import Sushi2 from "@/assets/sushi-2.png";
import Sushi3 from "@/assets/sushi-3.png";

export default {
  name: "FirstContent",
  components: {
    SushiCard,
  },
  data() {
    return {
      lorem1:
        "HAC TELLUS, FELIS RISUS AT mattis mattis. Eget cuismo semper eget tortor, donec amet, blandit. Tristique facilisi faucibus elementum feugiat in nam in feugiat. Ipsum odio etiam duis facilisis amet vulputate.",
      lorem2: "FOOD IS OUR COMMON GROUND, A UNIVERSAL EXPERIENCE.",
      lorem3:
        "Tristique tempus condimentum diam donec. Condimentum ullamcorper sit elementum hendrerit mi nulla in consequat, ut. Metus, nullam scelerisque netus viverra dui.",
      foodType: [
        {
          img: Sushi1,
          title: "The best table in town",
          description:
            "Sed aenean egestas ut aliquam turpis mauris, molestie. Viae tellus tempor sem id tempus neque, tellus turpis turpis. Morbi tortor id gravida aliquet.",
          linkTitle: "explore the menu",
        },
        {
          img: Sushi2,
          title: "Perfect for groups",
          description:
            "Quam eu proin sit massa condimentum. Volutpat non pulvinar aliquet nunc. Orci elementum in aliquet a gravida vivamus aliquam turpis vitae.",
          linkTitle: "Make a reservation",
        },
        {
          img: Sushi3,
          title: "Fresh produce everyday",
          description:
            "Hendrerit amet, volutpat leo non, commodo maecenas scelerisque tincidunt. Morbi vulputate morbi purus quisque sit sagittis orci elementum gravida.",
          linkTitle: "Learn more about us",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
.leftside {
  padding: 70px;
  & > * {
    margin-bottom: 60px;
  }
}

.rightside {
  padding: 50px;
  img {
    width: 100%;
  }
}
</style>