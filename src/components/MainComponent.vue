<template>
  <main>
    <FirstContent />
  </main>
</template>

<script>
import FirstContent from "./FirstContent.vue";
export default {
  name: "MainComponent",
  components: {
    FirstContent,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables";
main {
  color: $black;
}
</style>