<template>
  <button class="MainButton" @click="handleClick">{{ text }}</button>
</template>

<script>
export default {
  name: "MainButton",
  props: ["text"],
  methods: {
    handleClick: function() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/components/MainButton.scss";
</style>
