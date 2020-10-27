<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Default/Built in Derectives</h1>
				<p v-text="'Something else...'"></p>
				<p v-html="'<h1>This is heading one</h1>'"></p>
			</div>
		</div>

    <div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Custom Directives</h1>
				<p v-highlight>Color style by directives</p>
			</div>
		</div>
	</div>
</template>

<script></script>

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
