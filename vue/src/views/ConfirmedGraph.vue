<template>
  <div id="Confirmed">
    <Title02 title="Graph confirmed patients" />
    <MainDropdown :data="this.$countries" @changeValue="changeValueDropdown" />
    <!-- <MainChart v-if="showChart && chartData" /> -->
    <MainChart v-if="showChart && chartData" :data="this.chartData" />
  </div>
</template>

<script>
// components
import MainDropdown from "@/components/MainDropdown";
import Title02 from "@/components/Title02";
import MainChart from "@/components/MainChart";

// rest
import { getByCountry } from "@/rest/data/CovidData";

export default {
  name: "Confirmed",
  data() {
    return {
      countryCode: null,
      chartData: null,
      showChart: false
    };
  },
  components: {
    MainDropdown,
    Title02,
    MainChart
  },
  methods: {
    changeValueDropdown: async function(country) {
      if (country !== "default") {
        //dispatch({ type: 'increment' });
        let countryValues = country.split(",");
        this.countryCode = countryValues[1];
        let stats = await getByCountry(countryValues[0], "confirmed");
        let chartData = {};
        stats.data.map(stat => {
          if (stat.Country !== "") {
            return (chartData[stat.Date.split("T")[0]] = stat.Cases);
          }
        });
        this.chartData = chartData;
        this.showChart = stats.data.length !== 0;
      } else this.showChart = false;
    }
  }
};
</script>
