<template>
	<div class="component">
		<h3>Infomation User Details</h3>
		<p>List Details</p>
		<p>My Name: {{ reverseName() }}</p>
	</div>
</template>

<script>
export default {
	props: ["customName"],
	methods: {
		reverseName() {
			return this.customName
				.split("")
				.reverse()
				.join("")
		},
	},
}
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
