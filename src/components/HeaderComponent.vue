<template>
  <header>
    <div class="row">
      <!-- LEFTSIDE -->
      <div class="col-4 leftside">
        <img src="../assets/images/logo-restaurant-2x-400x77.png" alt="logo" />
      </div>
      <!-- RIGHTSIDE -->
      <div class="col-8 rightside">
        <ul class="d-flex justify-content-center">
          <li v-for="(item, index) in navHeader" :key="index">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
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
    }
    .rightside {
      background-image: url("../assets/images/slider52x.jpg");
      li {
        margin: 15px;
        a {
          color: $white;
        }
      }
    }
  }
}
</style>