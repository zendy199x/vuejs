<template>
	<h1>Hello {{ test }}</h1>
</template>

<script>
export default {
	name: "MyComponent",
	data() {
		return {
			test: "VueJS",
		}
	},
}
</script>
