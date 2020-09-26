<template>
	<div class="component">
		<h3>Infomation User Details</h3>
		<p>List Details</p>
		<p>My Name: {{ reverseName() }}</p>
		<button @click="resetName">Reset Name</button>
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
