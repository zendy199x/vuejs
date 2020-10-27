import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

Vue.directive("highlight", {
	bind(el           ) {
		el.style.backgroundColor = "yellow"
	},
})

new Vue({
	render: (h) => h(App),
}).$mount("#app")
