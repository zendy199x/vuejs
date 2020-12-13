<template>
  <div>
    <h1>User Edit</h1>
    <p>User Info Client:</p>
    <ul>
      <li>Locale: {{ $route.query.locale }}</li>
      <li>Browser: {{ $route.query.browser }}</li>
    </ul>
    <hr />
    <button class="btn btn-danger btn-block" @click="backPage">
      Something
    </button>
    <div style="height: 700px">
      <h3 id="vue">Learn VueJS</h3>
      <div style="height: 1700px"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.status) {
      next();
    } else {
      if (confirm("Are you sure ?")) {
        next();
      } else {
        next(false);
      }
    }
  },
  methods: {
    backPage() {
      this.status = true;
      alert("backPage");
    },
  },
};
</script>

<style></style>
