var app1 = new Vue({
	el: "#app",
	data: {
		title: "The VueJS Lifecycle",
	},
	beforeCreate: function () {
		console.log("beforeCreate")
	},
	created: function () {
		console.log("created")
	},
	beforeMount: function () {
		console.log("beforeMount")
	},
	mounted: function () {
		console.log("mounted")
	},
	beforeUpdate: function () {
		console.log("beforeUpdate")
	},
	updated: function () {
		console.log("update")
	},
	beforeDestroy: function () {
		console.log("beforeDestroy")
	},
	destroyed: function () {
		console.log("destroy")
	},
	methods: {
		destroyEvent: function () {
			this.$destroy()
		},
	},
})
