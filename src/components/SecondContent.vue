<template>
  <div class="row g-0">
    <div class="col-7 leftside"></div>
    <div class="col-5 rightside">
      <CardTemplate
        :subtitle="fineDiningExperience.title"
        :title="fineDiningExperience.subtitle"
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
@import "@/assets/style/variables";
.row {
  color: $white;
  .leftside {
    background-image: url("../assets/images/slider32x.jpg");
    background-size: cover;
  }
  .rightside {
    background-color: $black;
    padding: 100px;
  }
}
</style>