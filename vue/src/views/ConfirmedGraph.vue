<template>
  <div id="confirmed">
    <p>This is the confirmed graph.</p>
  </div>
</template>

<script>
export default {
  name: "Confirmed",
  mounted: function() {
    console.log(this.$countries);
  }
};
</script>
