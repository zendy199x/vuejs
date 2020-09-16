<template>
	<div id="my-component">
		<h1>Hello {{ test }}</h1>
		<button @click="changeTest">Click</button>
	</div>
</template>

<script>
// var data = { // change all
// 	test: "VueJS",
// }
export default {
	name: "my-component",
	data() {
		return {
			test: "VueJS", // change unique
		}
	},
	methods: {
		changeTest: function() {
			this.test = "Change Test"
			console.log(this)
		},
	},
}
</script>
