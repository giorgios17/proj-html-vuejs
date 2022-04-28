<template>
  <div class="row g-0">
    <div class="col-7 leftside"></div>
    <div class="col-5 rightside">
      <TakeOutCard
        :subtitle="takeOut.subtitle"
        :title="takeOut.title"
        :description="takeOut.description"
        :linkText="takeOut.linkText"
      />
    </div>
  </div>
</template>

<script>
import TakeOutCard from "@/components/TakeOutCard.vue";
export default {
  name: "TakeOut",
  components: {
    TakeOutCard,
  },
  data() {
    return {
      takeOut: {
        subtitle: "Enjoy your meal at home",
        title: "Takeout now available",
        description:
          "Pellentesque vitae viverra risus, sagittis. Veneanatis ridiculus sclereiqsque nisi in urna nulla. Sit tempo e edt nislm ac felix.",
        linkText: "View takeout menu",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
.row {
  color: $white;
  background-color: $black;
  .leftside {
    background-image: url("../assets/images/slider72x-scaled.jpg");
    background-size: cover;
    background-position: center;
  }
  .rightside {
    padding: 150px;
  }
}
</style>