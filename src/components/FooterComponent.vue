<template>
  <footer
    class="d-flex justify-content-center align-items-center"
    :style="{ backgroundImage: `url(${footerBg})` }"
  >
    <div class="text-center">
      <img :src="footerLogo" alt="footerlogo" />
      <p>{{ footerText }}</p>
      <div class="social" v-for="item in social" :key="item">
        <a :href="item.link">
          <font-awesome-icon :icon="item.icon" />
        </a>
      </div>
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
          icon: "fa-brands fa-facebook-f",
        },
        {
          name: "Twitter",
          link: "https://twitter.com/?lang=it",
          icon: "fa-brands fa-twitter",
        },
        {
          name: "Youtube",
          link: "https://www.youtube.com/",
          icon: "fa-brands fa-youtube",
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/",
          icon: "fa-brands fa-instagram",
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/",
          icon: "fa-brands fa-linkedin-in",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-size: cover;
  padding: 170px 100px 300px 100px;
  img,
  p {
    margin-bottom: 50px;
  }
  .social {
    display: inline-block;
    margin: 8px;
    a {
      color: black;
      background-color: white;
      border-radius: 50%;
      padding: 15px;
      & > * {
        width: 17px;
        height: 17px;
      }
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
}
</style>