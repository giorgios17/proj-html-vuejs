<template>
  <div>
    <MenuItem />
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";
export default {
  name: "MenuComponent",
  components: {
    MenuItem,
  },
  data() {
    return {
      appetizer: [
        {
          name: "Ahi salmon nigiri",
          description: "Nigiri di salmone, mango e avocado con salsa teriyaki.",
          price: "$48",
        },
        {
          name: "Umi masu salad",
          description:
            "Tristique tempus condimentum diam donec. Condimentum ullamcorper sit elementum hendrerit mi nulla in consequat, ut. Metus, nullam scelerisque netus viverra dui pretium pulvinar.",
          price: "$21",
        },
        {
          name: "Temaki with crab",
          description:
            "Ac vel, risus ornare secetus placerat duis amet dictumst tellus.",
          price: "$32",
        },
        {
          name: "California rolls",
          description:
            "Ac vel, risus ornare secetus placerat duis amet dictumst tellus.",
          price: "$22",
        },
      ],
      mainCourse: [
        {
          name: "Braised abalone",
          description:
            "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          price: "$52",
        },
        {
          name: "Twice coocked pork",
          description:
            "Ac vel, risus ornare senectus placerat duis amet dictumst tellus.",
          price: "$21",
        },
        {
          name: "Kung pao chicken",
          description:
            "Quis duis sit dictum aliquam a velit enim. Tellus in sit augue aliquam.",
          price: "$32",
        },
        {
          name: "Chaur siu & sushis",
          description:
            "Feugiat rhoncus ipsum tristique purus diam, et dolor molestie.",
          price: "$48",
        },
      ],
      desserts: [
        {
          name: "Chocolate ball cake",
          description:
            "In pellentesque in felis massa vehicula. In sed euismod ut.",
          price: "$13",
        },
        {
          name: "Lime pie with crust",
          description:
            "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          price: "$14",
        },
        {
          name: "Rasberry pear cake",
          description:
            "Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit.",
          price: "$18",
        },
        {
          name: "Café au lait",
          description:
            "Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit.",
          price: "$6",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>