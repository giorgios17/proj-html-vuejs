<template>
  <main>
    <FirstContent />
    <SecondContent />
    <CriticsAboutUs />
    <ProductOnEvidence />
    <NewsAndPromotions />
  </main>
</template>

<script>
import FirstContent from "./FirstContent.vue";
import SecondContent from "./SecondContent.vue";
import CriticsAboutUs from "./CriticsAboutUs.vue";
import ProductOnEvidence from "./ProductOnEvidence.vue";
import NewsAndPromotions from "./NewsAndPromotions.vue";
export default {
  name: "MainComponent",
  components: {
    FirstContent,
    SecondContent,
    CriticsAboutUs,
    ProductOnEvidence,
    NewsAndPromotions,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
main {
  color: $black;
}
</style>