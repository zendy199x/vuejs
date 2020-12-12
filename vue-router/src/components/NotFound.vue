<template>
  <div class="text-center">
    <h1>Not Found</h1>
    <p>This page not found...</p>
    <button class="btn btn-primary btn-block" @click="backHome">
      Back to home
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push({ name: "homepage" });
    },
  },
};
</script>

<style></style>
