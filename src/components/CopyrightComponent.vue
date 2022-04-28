<template>
  <div class="copyright">
    <p>
      Copyright {{ siteInfo.copyright }} | All Rights Reserved | Powered by
      {{ siteInfo.poweredBy }} | {{ siteInfo.author }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CopyrightComponent",
  data() {
    return {
      siteInfo: {
        copyright: "2012 - 2019 Avada",
        poweredBy: "Wordpress",
        author: "ThemeFusion",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.copyright {
  background-color: black;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
</style>