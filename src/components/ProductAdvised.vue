<template>
  <div>
    <img :src="jumbotron" alt="jumbotron" />
  </div>
</template>

<script>
//IMPORT IMAGES
import jumbotron from "@/assets/images/hero42x.jpg";
export default {
  name: "ProductAdvised",
  data() {
    return {
      jumbotron,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  img {
    width: 100%;
  }
}
</style>