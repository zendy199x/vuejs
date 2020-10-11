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
	destroyed() {
		console.log("Destroyed")
	},
}
</script>

<style scoped></style>
