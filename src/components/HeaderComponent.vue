<template>
  <header>
    <div class="row">
      <!-- LEFTSIDE -->
      <div class="col-5 leftside">
        <!-- logo -->
        <img src="../assets/images/logo-restaurant-2x-300x58.png" alt="logo" />
        <div>
          <CardTemplate
            :subtitle="bestTableInTown.subtitle"
            :title="bestTableInTown.title"
            :description="bestTableInTown.description"
            :linkText="bestTableInTown.linkText"
          />
        </div>
      </div>
      <!-- RIGHTSIDE -->
      <div class="col-7 rightside">
        <NavComponent :navHeader="navHeader" />
      </div>
    </div>
  </header>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import CardTemplate from "@/components/CardTemplate.vue";
export default {
  name: "HeaderComponent",
  components: {
    NavComponent,
    CardTemplate,
  },
  data() {
    return {
      navHeader: [
        "Home",
        "Culinary History",
        "Our Team",
        "Our Menu",
        "Takeout",
        "Bulletin",
        "Reservations",
      ],
      bestTableInTown: {
        subtitle: "the best table in town",
        title: "fine dining experience",
        description:
          "Pellentesque vitae viverra risus, sagittis. Veneanatis ridiculus sclereiqsque nisi in urna nulla. Sit tempo e edt nislm ac felix.",
        linkText: "Explore the menu",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/reset";
@import "@/assets/style/variables";
header {
  height: 100vh;
  .row {
    height: 100%;
    .leftside {
      background-color: $black;
      padding: 40px 120px;
      img {
        margin-bottom: 130px;
      }
    }
    .rightside {
      font-family: "Work Sans", sans-serif;
      background: linear-gradient(rgba(9, 9, 9, 0.849), rgba(241, 241, 241, 0)),
        url("../assets/images/slider52x.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      padding: 30px 60px;
    }
  }
}
</style>