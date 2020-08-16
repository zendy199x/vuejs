new Vue({
	el: "#app",
	data: {
		a: 0,
		b: 0,
	},
	computed: {
		increaseA: function () {
			console.log("Call A: Computed")
			return this.a
		},
		increaseB: function () {
			console.log("Call B: Computed")
			return this.b
		},
	},
	methods: {
		handleIncreaseA: function () {
			console.log("Call A: Methods")
			return this.a
		},
		handleIncreaseB: function () {
			console.log("Call B: Methods")
			return this.b
		},
	},
})
