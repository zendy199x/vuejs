<template>
	<div class="component">
		<h3>Infomation User Details</h3>
		<p>List Details</p>
		<p>My Name: {{ reverseName() }}</p>
		<p>My Age: {{ userAge }}</p>

		<button @click="resetName">Reset Name</button>
		<button @click="resetNameFunc()">Reset case: Call back</button>
	</div>
</template>

<script>
export default {
	props: {
		customName: {
			type: String,
			default: "Zendy",
			// default: function() {
			// 	return "Zendy"
			// },
			// required: true,
		},
		resetNameFunc: Function,
		userAge: Number,
	},
	methods: {
		reverseName() {
			return this.customName
				.split("")
				.reverse()
				.join("")
		},
		resetName() {
			this.customName = "Zendy"
			this.$emit("nameWasReset", this.customName)
		},
	},
}
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
