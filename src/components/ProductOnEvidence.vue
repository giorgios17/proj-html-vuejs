<template>
  <div>
    <div class="row">
      <div class="col-12">
        <img :src="jumbotron" alt="jumbotron" />
      </div>
    </div>
  </div>
</template>

<script>
import jumbotron from "@/assets/images/page52x.jpg";
export default {
  name: "ProductOnEvidence",
  data() {
    return {
      jumbotron,
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  img {
    width: 100%;
  }
}
</style>