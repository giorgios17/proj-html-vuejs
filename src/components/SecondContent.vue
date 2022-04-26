<template>
  <div class="row align-items-center">
    <div class="col-7 leftside">
      <img src="../assets/images/slider32x.jpg" alt="slider32" />
    </div>
    <div class="col-5 rightside">
      <CardTemplate
        :table="fineDiningExperience.title"
        :title="fineDiningExperience.table"
        :description="fineDiningExperience.description"
        :linkText="fineDiningExperience.linkText"
      />
    </div>
  </div>
</template>

<script>
import CardTemplate from "@/components/CardTemplate.vue";
export default {
  name: "SecondContent",
  components: {
    CardTemplate,
  },
  data() {
    return {
      fineDiningExperience: {
        table: "the best table in town",
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
@import "@/assets/style/variables";
.row {
  color: $white;
  background-color: $black;
  .leftside {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>