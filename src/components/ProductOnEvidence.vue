<template>
  <div>
    <div class="row g-0">
      <div class="col-12">
        <div class="text-center textImg">
          <h6>KUNG PAO CHICKEN - 32$</h6>
        </div>
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
  background-image: url("../assets/images/page52x.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 34%;
  margin-top: 0px;
  padding-right: 10%;
  padding-bottom: 2%;
  margin-bottom: 0px;
  padding-left: 10%;
  .textImg {
    color: white;
  }
}
</style>