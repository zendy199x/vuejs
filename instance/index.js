var data = {
	title: "The VueJS Instance",
	showParagraph: false,
}

var app1 = new Vue({
	el: "#app",
	data: data,
	methods: {
		show: function () {
			this.showParagraph = true
			this.updateTitle("This VueJS Instance (Updated)")
		},
		updateTitle: function (title) {
			this.title = title
		},
	},
	computed: {
		lowerCaseTitle: function () {
			return this.title.toLowerCase()
		},
	},
	watch: {
		title: function (value) {
			alert("Title changed, new value: " + value)
		},
	},
})

var app2 = new Vue({
	el: "#app-2",
	data: {
		title: "The Second VueJS Instance",
	},
	methods: {
		onChangeTitle: function () {
			app1.title = "Changed !!!"
		},
	},
})

setTimeout(() => (app1.title = "Change SetTimeout"), 3000)

app1.newProps = "New Value !!!"
console.log(app1)
console.log(app1.$data.title)

