<template>
	<div>
		<h1>{{ cardWords }}</h1>

		<div class="title">
			<slot name="title"></slot>
		</div>

		<div class="content">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: ["cardWords"],
}
</script>

<style scoped>
div {
	width: 100%;
	border: 1px solid #ccc;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
	padding: 30px;
	margin: 20px auto;
	text-align: center;
}

h2 {
	color: red;
}

.title {
	font-style: italic;
}
</style>
