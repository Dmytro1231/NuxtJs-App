<template>
  <div class="container">
    <app-hero></app-hero>
  </div>
</template>

<script>
import AppFooter from "~/components/Footer/AppFooter.vue";
import AppHeader from "~/components/Header/AppHeader.vue";
import AppHero from "~/components/Hero/ProductCard.vue";
import Default from "~/layouts/default.vue";

export default {
  components: { AppHeader, AppHero, AppFooter, Default },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&family=Raleway:ital@0;1&display=swap");
/* font-family: 'Montserrat', sans-serif;
font-family: 'Raleway', sans-serif; */
</style>
