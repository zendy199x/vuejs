<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<Card cardWords="Car">
						<h2 slot="title">{{ cardTitle }}</h2>
						<p slot="content">So pretty</p>
					</Card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Card from "./components/Card.vue"

export default {
	name: "App",
	data: function() {
		return {
			cardTitle: "White Cat",
		}
	},
	components: {
		Card, //appCard: Card
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
