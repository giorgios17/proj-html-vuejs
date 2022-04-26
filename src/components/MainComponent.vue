<template>
  <main>
    <FirstContent />
    <SecondContent />
    <CriticsAboutUs />
  </main>
</template>

<script>
import FirstContent from "./FirstContent.vue";
import SecondContent from "./SecondContent.vue";
import CriticsAboutUs from "./CriticsAboutUs.vue";
export default {
  name: "MainComponent",
  components: {
    FirstContent,
    SecondContent,
    CriticsAboutUs,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
main {
  color: $black;
}
</style>