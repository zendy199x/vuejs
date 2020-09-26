<template>
	<div class="col-xs-12 col-sm-6">
		<ul class="list-group-item" v-for="value in 5" :key="value">
			<li>Server #{{ value }}</li>
		</ul>
	</div>
</template>

<script></script>

<style scoped>
div {
	border: 1px solid blue;
}
</style>
