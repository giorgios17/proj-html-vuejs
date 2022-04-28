<template>
  <div id="app">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
    <CopyrightComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import CopyrightComponent from "./components/CopyrightComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CopyrightComponent,
  },
};
</script>

<style lang="scss">
@import "@/assets/style/reset";
@import "~bootstrap";
@import "@/assets/style/variables";
#app {
  font-family: Lora, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
.container-gs {
  width: 70%;
  margin: auto;
  padding: 80px 0px;
}
</style>
