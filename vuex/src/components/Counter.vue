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
  data() {
    return {};
  },
  methods: {
    increase() {
      this.$emit("update", 1);
    },
    decrease() {
      this.$emit("update", -1);
    },
  },
};
</script>

<style lang="scss"></style>
