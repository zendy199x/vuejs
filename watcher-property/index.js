var app = new Vue({
	el: "#app",
	data: {
		score: "Your score is 7",
	},
	// computed và watcher thường đi cùng với nhau
	// watcher theo dõi sự thay đổi của biến để làm hành động nào đó
	watch: {
		score: function (newValue) {
			alert("Changed Score !!!")
		},
	},
})
app.score = "Your score is 8"
