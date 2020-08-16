new Vue({
	el: "#app",
	data: {
		message: "Hello World",
		body: "Training VueJS",
		link: "https://www.facebook.com/zendy199x",
		testHTML:
			"<a href='https://www.facebook.com'>Get Facebook</a>",
	},
	methods: {
		sayHello: function () {
			document.write("Say Hello")
		},
		showBody: function () {
			this.body = "Update body"
			return this.body
		},
	},
})
