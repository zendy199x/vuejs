<template>
  <div class="container">
    <div clas="row">
      <div
        class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center"
      >
        <h1>Animations</h1>
        <hr />
        <button class="btn btn-block btn-success" @click="show = !show">
          Show Notification
        </button>
        <br />
        <br />

        <transition name="fade">
          <div class="alert alert-success" v-if="show">
            This is something notification
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
/* enter */
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s ease-in;
}

/* leave */
.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 1s ease-out;
  opacity: 0;
}
</style>
