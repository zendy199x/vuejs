import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("toUpperCase", function(val) {
  return val.toUpperCase();
});

Vue.mixin({
  created() {
    console.log("Global Mixins - Created Hook");
  },
});

new Vue({
  render: (h) => h(App),
  created() {
    console.log("Global Created");
  },
}).$mount("#app");
