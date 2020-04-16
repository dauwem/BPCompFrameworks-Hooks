<template>
  <header>
    <h1>
      <router-link to="confirmed">COVID-19</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/confirmed">Confirmed</router-link>
        </li>
        <li>
          <router-link to="/cured">Cured</router-link>
        </li>
        <li>
          <router-link to="/dead">Dead</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
@import "@/assets/css/components/Header.scss";
</style>
