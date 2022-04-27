<template>
  <main>
    <FirstContent />
    <SecondContent />
    <CriticsAboutUs />
    <ProductOnEvidence />
    <NewsAndPromotions />
    <TakeOut />
    <MenuComponent />
  </main>
</template>

<script>
import FirstContent from "./FirstContent.vue";
import SecondContent from "./SecondContent.vue";
import CriticsAboutUs from "./CriticsAboutUs.vue";
import ProductOnEvidence from "./ProductOnEvidence.vue";
import NewsAndPromotions from "./NewsAndPromotions.vue";
import TakeOut from "./TakeOut.vue";
import MenuComponent from "./MenuComponent.vue";

export default {
  name: "MainComponent",
  components: {
    FirstContent,
    SecondContent,
    CriticsAboutUs,
    ProductOnEvidence,
    NewsAndPromotions,
    TakeOut,
    MenuComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
main {
  color: $black;
}
</style>