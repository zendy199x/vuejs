var app = new Vue({
	el: "#app",
	data: {
		handleChangeRedColor: false,
		color: "green",
	},
	computed: {
		divClasses: function () {
			return {
				red: this.handleChangeRedColor,
				blue: !this.handleChangeRedColor,
			}
		},
	},
})
