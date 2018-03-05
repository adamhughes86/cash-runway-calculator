<template>
  <div id="app">
    <app-heading/>
    <app-intro/>
    <app-calculator @calculated="runway = $event"/>
    <app-results :runway="runway"/>
    <app-runway :runway="runway"/>
    <app-footer/>
  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      runway: null
    }
  }
}
</script>

<style lang="scss">
  html,
  body {
    margin: 0;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "header header"
                         "main calculator"
                         "results results"
                         "svg svg"
                         "footer footer";
  }
</style>
