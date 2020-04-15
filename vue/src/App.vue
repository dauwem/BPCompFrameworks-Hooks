<template>
  <div id="app">
    <Header />
    <MainContainer v-if="isCountriesSet">
      <router-view />
    </MainContainer>
  </div>
</template>

<script>
// global
import Vue from "vue";

// components
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";

// rest
import { getCountries } from "@/rest/data/CovidData";

export default {
  name: "app",
  components: {
    Header,
    MainContainer
  },
  data() {
    return {
      isCountriesSet: false
    };
  },
  mounted: async function() {
    Vue.prototype.$countries = await getCountries();
    this.isCountriesSet = true;
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
