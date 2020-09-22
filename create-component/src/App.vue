<template>
	<div>
		<h1>Hello: {{ test }}</h1>
		<contact-component></contact-component>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			test: "VueJS",
		}
	},
}
</script>

<style></style>
