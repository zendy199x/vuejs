var app = new Vue({
	el: "#app",
	data: {
		linkVal: "https://www.facebook.com/zendy199x",
	},
	methods: {
		changeLink: function () {
			this.linkVal = "https://google.com.vn"
		},
	},
})
