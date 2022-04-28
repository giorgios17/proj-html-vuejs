<template>
  <div class="bg">
    <FoodCard
      :name="foodInfo.name"
      :price="foodInfo.price"
      :description="foodInfo.description"
    />
  </div>
</template>

<script>
import FoodCard from "@/components/FoodCard.vue";

export default {
  name: "ProductAdvised",
  components: {
    FoodCard,
  },
  data() {
    return {
      foodInfo: {
        name: "Braised abalone",
        price: 52,
        description:
          "Pretium accumsan porttitor viverra leo gravida mollis imperdiet. Fringilla nibh pharetra sociis leo amet.",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("../assets/images/hero42x.jpg");
  background-size: cover;
  background-position: center;
  padding: 150px;
}
</style>