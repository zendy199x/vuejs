<template>
  <div class="mt-3">
    <h1 class="text-center">User Management</h1>
    <p>
      This is area to manage user of website
    </p>
    <hr />
    <button class="btn btn-danger btn-block" @click="backHome">
      Back to Home
    </button>
    <router-view />
    <button class="btn btn-warning btn-block" @click="goDetail">Go to Admin</button>˝
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      // Vue.router
      this.$router.push("/");
    },
    goDetail() {
      this.$router.push("/user/1");
    },
  },
};
</script>

<style></style>
