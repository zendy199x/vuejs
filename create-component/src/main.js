import Vue from "vue"
import App from "./App.vue"
import Contact from "./Contact.vue"

Vue.component("contact-component", Contact)

new Vue({
	el: "#app",
	render: (h) => h(App),
})
