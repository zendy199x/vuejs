<template>
	<div id="app">
		<NewItem @itemAdd="addItem"></NewItem>
		<ItemsLayout :items="items" @itemRemove="removeItem"></ItemsLayout>
		<div class="row mt-3">
			<div class="col-sm-12 text-center">
				<div class="alert alert-info">
					Info Click on a Item to delete it !!!
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ItemsLayout from "./components/ItemsLayout.vue"
import NewItem from "./components/NewItem.vue"

export default {
	data: function() {
		return {
			items: [],
			maxItems: 10,
		}
	},
	components: {
		ItemsLayout,
		NewItem,
	},
	methods: {
		addItem(item) {
			this.items.push(item)
		},
		removeItem(index) {
			this.items.splice(index, 1)
		},
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
