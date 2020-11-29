<template>
  <div class="container">
    <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
      <h1>Filter & Mixins</h1>
      <p>{{ text | toLowerCase | to-uppercase }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello everywhere, VueJS",
    };
  },
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    },
  },
};
</script>

<style></style>
