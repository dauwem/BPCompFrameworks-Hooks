<template>
  <div id="Cured">
    <Title02 title="Graph cured patients" />
    <MainDropdown :data="this.$countries" @changeValue="changeValueDropdown" />
    <div v-if="showChart && chartData">
      <MainChart :data="chartData" />
      <Title03 title="Some details..." />
      <p>In this country live {{ population }} people</p>
      <p>You checked {{ count }} countries</p>
      <MainButton @onClick="decreaseCount = 1" text="Delete previous count" />
    </div>
  </div>
</template>

<script>
// components
import MainDropdown from "@/components/MainDropdown";
import Title02 from "@/components/Title02";
import Title03 from "@/components/Title03";
import MainChart from "@/components/MainChart";
import MainButton from "@/components/MainButton";

// rest
import { getByCountry } from "@/rest/data/CovidData";

// mixins
import PopulationMixin from "@/mixins/PopulationMixin";
import CountMixin from "@/mixins/CountMixin";

export default {
  name: "Cured",
  mixins: [PopulationMixin, CountMixin],
  data() {
    return {
      countryCode: "BE",
      chartData: null,
      showChart: false,
      population: 0,
      count: 0
    };
  },
  components: {
    MainDropdown,
    Title02,
    Title03,
    MainChart,
    MainButton
  },
  methods: {
    changeValueDropdown: async function(country) {
      if (country !== "default") {
        this.increaseCount = 1;
        let countryValues = country.split(",");
        this.countryCode = countryValues[1];
        let stats = await getByCountry(countryValues[0], "recovered");
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
  },
  // Will be executed when a data change causes a DOM rerender
  updated: function() {
    //console.log('Update executed');
  }
};
</script>
