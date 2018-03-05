<template>
  <footer>
    <p>A VueJS experiment by <a href="http://forwardtheory.co.uk">Forward Theory</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  @import "../theme/style";

  footer {
    grid-area: footer;
    color: $color-dark;
    font-family: $font-body;
    font-size: 16px;
    text-align: center;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
