<template>
  <div>
    <button class="btn btn-success btn-block" @click="increase">
      Increase
    </button>

    <button class="btn btn-warning btn-block" @click="decrease">
      Decrease
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    increase() {
      // this.$emit("update", 1);
      // this.$store.state.result++;
      this.$store.commit("increaseOption", 30);
    },
    decrease() {
      // this.$emit("update", -1);
      this.$store.state.result--;
    },
  },
};
</script>

<style lang="scss"></style>
