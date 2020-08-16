new Vue({
	el: "#app",
	data: {
		message: "Hello World",
		body: "Training VueJS",
	},
	methods: {
		sayHello: function () {
			document.write("Say Hello")
		},
		showBody: function () {
			return this.body
		},
	},
})
