<template>
  <footer
    class="d-flex justify-content-center align-items-center"
    :style="{ backgroundImage: `url(${footerBg})` }"
  >
    <div class="text-center">
      <img :src="footerLogo" alt="footerlogo" />
      <p>{{ footerText }}</p>
    </div>
  </footer>
</template>

<script>
import footerBg from "@/assets/images/footer2x.jpg";
import footerLogo from "@/assets/images/logo-restaurant-2x-300x58.png";
export default {
  name: "FooterComponent",
  data() {
    return {
      footerBg,
      footerLogo,
      footerText:
        "Quam eu proin sit massa condimentum. Volutpat non pulvinar aliquet nunc. Quam eu proin sit massa condimentum.",
      social: [
        {
          name: "Facebook",
          link: "https://it-it.facebook.com/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-size: cover;
  height: 800px;
  img,
  p {
    margin-bottom: 50px;
  }
}
</style>