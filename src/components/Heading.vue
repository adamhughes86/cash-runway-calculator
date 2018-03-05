<template>
  <header>
    <h1>Cash Runway Calculator</h1>
  </header>
</template>

<script>
export default {
  name: 'Heading'
}
</script>

<style lang="scss" scoped>
  @import "../theme/style";

  header {
    grid-area: header;
    margin-bottom: 16px;
    text-align: center;
    background-color: $color-dark;
    border-top: 2px solid $color-light;
    border-bottom: 5px solid $color-accent;
  }

  h1 {
    color: $color-accent;
    font-family: $font-heading;
    font-size: 45px;
    font-weight: 800;
  }
</style>
