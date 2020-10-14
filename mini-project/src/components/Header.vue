<template>
	<div class="row mb-3">
		<div class="col-sm-12">
			<h3>Item Add</h3>
			<div class="progress">
				<div
					class="progress-bar bg-success"
					:style="{width: (itemCount/maxItem) * 100 + '%'}"
				></div>
				<span>{{ itemCount }} / {{ maxItem }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["itemCount", "maxItem"],
}
</script>

<style></style>
