<template>
  <div class="container">
    <h1>VueX</h1>
    <hr />
    <!-- <result :result="result" /> -->
    <result />
    <hr />
    <other />
    <br />
    <counter />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Other from "./components/Other.vue";
import Result from "./components/Result.vue";

export default {
  // data() {
  //   return {
  //     result: 0,
  //   };
  // },
  components: {
    Result,
    Counter,
    Other,
  },
};
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
