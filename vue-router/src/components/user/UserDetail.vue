<template>
  <div>
    <h1>User Detail</h1>
    <p>ID User: {{ id }}</p>
    <p>ID User: {{ $route.params.id }}</p>
    <hr />
    <!-- <router-link tag="button" class="btn btn-warning btn-block" :to="`/user/${$route.params.id}/edit`"> -->
    <router-link tag="button" class="btn btn-warning btn-block" :to="link">
      Edit User
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      link: {
        name: "useredit",
        params: {
          id: this.$route.params.id,
        },
        query: {
          locate: "vi",
          browser: "chrome",
        },
        hash: "#vue",
      },
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   if (false) {
  //     next();
  //   } else {
  //     next(false);
  //   }
  // },
  watch: {
    $route(to) {
      this.id = to.params.id;
    },
  },
};
</script>

<style></style>
