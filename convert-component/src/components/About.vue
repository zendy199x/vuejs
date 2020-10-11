<template>
	<div>
		<h1>This is About Page</h1>
	</div>
</template>

<script>
export default {
	deactivated() {
		console.log("Deactivated About Component")
	},
	activated() {
		console.log("Activated About Component")
	},
}
</script>

<style scoped></style>
