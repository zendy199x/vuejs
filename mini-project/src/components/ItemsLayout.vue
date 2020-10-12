<template>
	<div class="row">
		<Items v-for="item in items" :data="item" :key="item">
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
}
</script>

<style></style>
