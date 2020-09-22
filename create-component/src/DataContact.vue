<template>
	<div>
		<p>My address: {{ address }}</p>
		<hr />
		<button @click="changePhone">Show My Phone</button>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			address: "Hai Duong",
		}
	},
	methods: {
		changePhone() {
			this.address = "0388171781"
		},
	},
}
</script>

<style></style>
