<template>
  <div>
    <p>This is result: {{ tenResult }}</p>
    <p>This is name result: {{ nameResult }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // computed: {
  //   result() {
  //     return this.$store.state.result;
  //   },
  //   nameResult() {
  //     return this.$store.getters.nameResult;
  //   },
  // },
  computed: {
    ...mapGetters(["tenResult", "nameResult"])
  },
};
</script>

<style lang="scss"></style>
