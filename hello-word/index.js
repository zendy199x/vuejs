new Vue({
	el: "#app",
	data: {
		message: "Hello Word",
    },
    methods: {
        changeValue: function(event) {
            this.message = event.target.value
        }
    }
})
