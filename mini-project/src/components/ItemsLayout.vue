<template>
	<div class="row">
		<Items
			v-for="(item, index) in items"
			:data="item"
			:key="item"
			@click.native="removeItem(index)"
		>
			{{ item }}
		</Items>
	</div>
</template>

<script>
import Items from "./Items.vue"

export default {
	props: ["items"],
	components: {
		Items, // appItems: Items,
	},
	methods: {
		removeItem(index) {
			this.$emit("itemRemove", index)
		},
	},
}
</script>

<style></style>
