import Vue from "vue";

export const CountryProvider = new Vue({
  template: "<span><slot /></span>",
  data() {
    return {
      countries: null
    }
  },
  methods: {
    setCountries(countries) {
      this.countries = countries;
    }
  },
  provide() {
    return {
      setCountries: this.setCountries,
      countries: () => this.countries
    }
  }
});
