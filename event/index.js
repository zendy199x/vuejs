new Vue({
	el: "#app",
	data: {
		value: 0,
		x: 0,
		y: 0,
	},
	methods: {
		handleIncrease: function () {
			this.value++
		},
		mouseCoordinates: function (event) {
			this.x = event.clientX
			this.y = event.clientY
		},
	},
})
