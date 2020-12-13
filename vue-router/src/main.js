import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior(to) {
    // if (savedPosition) {
    //   return savedPosition;
    // }
    if (to.hash) {
      return { selector: to.hash };
    }
    // return { x: 0, y: 700 };
  },
});

router.beforeEach((to, from, next) => {
  console.log("Global route guards");
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
