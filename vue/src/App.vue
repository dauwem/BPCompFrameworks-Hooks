<template>
  <div id="app">
    <Header />
    <MainContainer>
      <router-view />
    </MainContainer>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<script>
// components
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";

// rest
import { getCountries } from "./rest/data/CovidData";

export default {
  name: "app",
  components: {
    Header,
    MainContainer
  },
  mounted: async function() {
    console.log(await getCountries());
  }
};
</script>

<style>
body {
  margin-left: 2vw;
  margin-right: 2vw;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
