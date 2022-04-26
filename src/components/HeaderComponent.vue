<template>
  <header>
    <div class="row">
      <!-- LEFTSIDE -->
      <div class="col-5 leftside">
        <!-- logo -->
        <img src="../assets/images/logo-restaurant-2x-300x58.png" alt="logo" />
        <div class="leftContent">
          <p class="text-uppercase">{{ headerContent.table }}</p>
          <h1 class="text-uppercase">{{ headerContent.title }}</h1>
          <p>{{ headerContent.description }}</p>
          <a class="border border-light" href="#">EXPLORE THE MENU</a>
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
export default {
  name: "HeaderComponent",
  components: {
    NavComponent,
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
      headerContent: {
        table: "the best table in town",
        title: "fine dining experience",
        description:
          "Pellentesque vitae viverra risus, sagittis. Veneanatis ridiculus sclereiqsque nisi in urna nulla. Sit tempo e edt nislm ac felix.",
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
      padding: 40px 80px;
      .leftContent {
        margin-top: 120px;
        margin-left: 100px;
        width: 60%;
        a {
          color: $white;
          padding: 10px 30px;
        }
        img {
          margin-bottom: 130px;
        }
        p,
        h1 {
          margin-bottom: 70px;
        }
        h1 {
          font-size: 62px;
          font-weight: bold;
        }
      }
    }
    .rightside {
      background: linear-gradient(rgba(9, 9, 9, 0.5), rgba(219, 211, 211, 0)),
        url("../assets/images/slider52x.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      padding: 30px 60px;
    }
  }
}
</style>