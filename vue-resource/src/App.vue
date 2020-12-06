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

        <hr />
        <br />
        <button
          class="btn btn-block btn-warning"
          type="submit"
          @click="getAllUsers"
        >
          Get All Data
        </button>
        <br />
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(user, index) in dataUsers"
            :key="index"
          >
            {{ user.username }} - {{ user.email }}
          </li>
        </ul>
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
      dataUsers: [],
    };
  },
  methods: {
    submit() {
      // console.log("Submit", this.user);
      this.$http.post("", this.user).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getAllUsers() {
      this.$http
        .get("")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const newArr = [];
          for (let key in data) {
            newArr.push(data[key]);
          }
          this.dataUsers = newArr;
        });
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
