<template>
	<div class="component">
		<h3>Infomation User Details</h3>
		<p>List Details</p>
		<p>My Name: {{ customName }}</p>
	</div>
</template>

<script>
export default {
	props: ["customName"],
}
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
