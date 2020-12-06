<template>
  <div class="container">
    <div clas="row">
      <div
        class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center"
      >
        <h1>Animations</h1>
        <hr />

        <select v-model="typeAnimation" class="form-control mb-md-3">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>

        <button class="btn btn-block btn-success" @click="show = !show">
          Show Notification
        </button>
        <br />
        <br />

        <transition :name="typeAnimation">
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

        <transition
          appear
          enter-class=""
          enter-active-class="animated bounceOutDown"
          leave-class=""
          leave-active-class="animated hinge"
        >
          <div class="alert alert-danger" v-if="show">
            This is something notification
          </div>
        </transition>

        <transition :name="typeAnimation" mode="out-in">
          <div class="alert alert-success" v-if="show" key="sucess">
            This is something notification success
          </div>
          <div class="alert alert-danger" v-else key="danger">
            This is something notification danger
          </div>
        </transition>
        <hr />

        <button
          class="btn btn-success btn-block mb-md-3"
          @click="status = !status"
        >
          Add or Remove
        </button>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div class="style-main">
            <div class="add-remove" v-if="status"></div>
          </div>
        </transition>

        <hr />
        <button
          class="btn btn-block btn-primary"
          @click="
            selectComponent == 'Success'
              ? (selectComponent = 'Danger')
              : (selectComponent = 'Success')
          "
        >
          Submit (toggle even)
        </button>
        <br />
        <transition name="fade" mode="out-in">
          <component :is="selectComponent"></component>
        </transition>

        <hr />
        <button class="btn btn-block btn-warning" @click="addItem">
          Add Item
        </button>
        <br />
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              :key="number"
              style="cursor: pointer"
              @click="removeItem(index)"
            >
              {{ number }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Danger from "./components/Danger.vue";
import Success from "./components/Success.vue";

export default {
  components: {
    Danger,
    Success,
  },
  data() {
    return {
      show: true,
      status: false,
      typeAnimation: "fade",
      elementWidth: 100,
      alertAnimation: "faded",
      selectComponent: "Danger",
      numbers: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    beforeEnter: (el) => {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let point = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + point * 10 + "px";
        point++;
        if (point > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter() {
      console.log("afterEnter");
    },
    afterCancelled() {
      console.log("enterCancelled");
    },
    beforeLeave: (el) => {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let point = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - point * 10 + "px";
        point++;
        if (point > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave() {
      console.log("afterLeave");
    },
    leaveCancelled() {
      console.log("LeaveCancelled");
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.push(pos);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
  },
};
</script>

<style scoped>
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
  position: absolute;
}

.slide-move {
  transition: transform 1s ease-out;
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

.style-main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.add-remove {
  width: 200px;
  height: 200px;
  background: tomato;
}
</style>
