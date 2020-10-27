import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

Vue.directive("custom", {
	bind(el, binding) {
		if (binding.arg === "background") {
			el.style.backgroundColor = binding.value
		} else {
			el.style.color = binding.value
		}
	},
})

new Vue({
	render: (h) => h(App),
}).$mount("#app")
