<template>
	<div id="app">
		<ItemsLayout :items="items"></ItemsLayout>
	</div>
</template>

<script>
import ItemsLayout from "./components/ItemsLayout.vue"

export default {
	data: function() {
		return {
			items: ["Zendy", "Duc Nguyen"],
			maxItems: 10,
		}
	},
	components: {
		ItemsLayout,
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
