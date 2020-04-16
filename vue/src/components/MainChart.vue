<template>
  <div id="MainChart">
    <line-chart :data="data" />
  </div>
</template>

<script>
export default {
  name: "MainChart",
  props: ["data"]
};
</script>

<style lang="scss">
@import "@/assets/css/components/MainChart.scss";
</style>
