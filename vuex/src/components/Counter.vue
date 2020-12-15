<template>
  <div>
    <button class="btn btn-success btn-block" @click="increment">
      Increase
    </button>

    <button class="btn btn-warning btn-block" @click="asyncDecrement">
      Decrease
    </button>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  methods: {
    // increase() {
    //   // this.$emit("update", 1);
    //   // this.$store.state.result++;
    //   this.$store.commit("increaseOption", 30);
    // },
    // decrease() {
    //   // this.$emit("update", -1);
    //   this.$store.state.result--;
    // },
    // ...mapMutations(["decreaseOption"]),
    ...mapActions(["increment", "asyncDecrement"]),
  },
};
</script>

<style lang="scss"></style>
