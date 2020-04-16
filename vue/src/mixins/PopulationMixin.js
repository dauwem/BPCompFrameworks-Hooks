// helpers
import { getPopulationByCountry } from "@/helpers/Helper";

var PopulationMixin = {
  data() {
    return {
      population: 0
    };
  },
  /* created: function() {
    console.log('Mixin hook called on creation!');
  }, */
  // Watch takes a look at a specific data value. When that value changes, this function will be executed
  watch: {
    chartData: async function() {
      this.population = await getPopulationByCountry(this.countryCode);
    }
  }
};

export default PopulationMixin;
