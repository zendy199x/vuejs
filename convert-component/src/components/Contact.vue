<template>
	<div>
		<h1>This is Contact Page</h1>
		<button @click="counter++">Increase Value</button>
		<p>{{ counter }}</p>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			counter: 0,
		}
	},
	created() {
		console.log("Created Contact")
	},
	destroyed() {
		console.log("Destroyed Contact")
	},
	deactivated() {
		console.log("Deactivated Contact Component")
	},
	activated() {
		console.log("Activated Contact Component")
	},
}
</script>

<style scoped></style>
