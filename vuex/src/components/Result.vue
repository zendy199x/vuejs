<template>
  <div>
    <p>This is result: {{ result }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    result() {
      return this.$store.state.result;
    },
  },
  // props: ["result"],
};
</script>

<style lang="scss"></style>
