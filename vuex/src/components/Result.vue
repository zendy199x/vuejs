<template>
  <div>
    <p>This is result: {{ result }}</p>
    <p>This is getter result: {{ getterResult }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    result() {
      return this.$store.state.result;
    },
    getterResult() {
      return this.$store.getters.tenResult;
    },
  },
  // props: ["result"],
};
</script>

<style lang="scss"></style>
