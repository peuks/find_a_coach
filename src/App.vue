<template>
  <!-- <div id="nav"> -->
  <the-header></the-header>
  <router-view> </router-view>
  <!-- <router-link to="/">Home</router-link> | -->
  <!-- <router-link to="/about">About</router-link> -->
  <!-- </div> -->
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  // Local component in App.vue because we only use it here
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
