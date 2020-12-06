<template>
  <div class="container">
    <div class="row">
      <div
        class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-left"
      >
        <h1 class="text-center">Vue Resource</h1>
        <div class="form-group">
          <input class="form-control" type="text" v-model="user.username" />
        </div>

        <div class="form-group">
          <input class="form-control" type="text" v-model="user.email" />
        </div>

        <button class="btn btn-block btn-success" type="submit" @click="submit">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
      },
    };
  },
  methods: {
    submit() {
      // console.log("Submit", this.user);
      this.$http
        .post("https://vue-resource-28a2e-default-rtdb.firebaseio.com/data.json", this.user)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
