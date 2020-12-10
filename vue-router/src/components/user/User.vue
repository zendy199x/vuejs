<template>
  <div>
    <h1>User</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet
      fugit dolorum quasi consectetur exercitationem ea, dolores laborum
      laboriosam magnam fuga vero eius vitae alias perferendis quis sed tenetur
      ipsam.
    </p>
    <hr />
    <button class="btn btn-danger" @click="backHome">
      Back to Home
    </button>
    <router-view />
    <button class="btn btn-warning" @click="goDetail">Go to Admin</button>˝
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
