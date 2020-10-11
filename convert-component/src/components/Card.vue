<template>
	<div>
		<h1>This is Card Page</h1>
	</div>
</template>

<script>
export default {
	deactivated() {
		console.log("Deactivated Card Component")
	},
	activated() {
		console.log("Activated Card Component")
	},
}</script>

<style scoped></style>
