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
          <!-- <div class="alert alert-success" v-if="show"> -->
          <div class="alert alert-success" v-show="show">
            This is something notification
          </div>
        </transition>

        <transition name="slide">
          <div class="alert alert-warning" v-if="show">
            This is something notification
          </div>
        </transition>

        <transition name="slide" appear>
          <div class="alert alert-danger" v-if="show">
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
      show: true,
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

/* Slide transition effect */
/* enter */
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  transition: opacity 1s ease-out;
  animation: slide-in 1s ease-in-out forwards;
}

/* leave */
.slide-leave {
  opacity: 1;
}

.slide-leave-active {
  opacity: 0;
  transition: opacity 1s ease-in;
  animation: slide-out 1s ease-in forwards;
}

/* key-frames */
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
