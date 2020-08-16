var app = new Vue({
	el: "#app",
	data: {
		color: "gray",
		width: 100,
		height: 100,
	},
	computed: {
		customStyles: function () {
			return {
				backgroundColor: this.color,
				width: this.width + "px",
				height: this.height + "px",
			}
		},
	},
})
