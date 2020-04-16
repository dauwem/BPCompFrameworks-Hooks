<template>
  <div id="MainDropdown">
    <select class="MainDropdown" @change="changeValue">
      <option value="default">Select a country</option>
      <option
        v-for="item in data"
        :key="item.ISO2"
        :value="`${item.Slug},${item.ISO2}`"
        >{{ item.Country }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: "MainDropdown",
  props: ["data"],
  methods: {
    changeValue: function(event) {
      this.$emit("changeValue", event.target.value);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/components/MainDropdown.scss";
</style>
