<template>
	<div class="col-sm-6 col-md-4 col-lg-3">
		<div class="card mb-3">
			<div class="card-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
.card-body {
	font-family: "Arizonia", cursive;
	font-size: 24px;
	color: #6e6e6e;
}

.item {
	cursor: pointer;
}

.item:hover {
	background-color: #ffe2e2;
}
</style>
