<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<button
						class="btn btn-outline-danger"
						@click="selectedComponent = 'Card'"
					>
						Card
					</button>

					<button
						class="btn btn-outline-danger"
						@click="selectedComponent = 'About'"
					>
						About
					</button>

					<button
						class="btn btn-outline-danger"
						@click="selectedComponent = 'Contact'"
					>
						Contact
					</button>
				</div>
			</div>
			<div class="col-sm-12">
				<component :is="selectedComponent"></component>
			</div>
		</div>
	</div>
</template>

<script>
import Card from "./components/Card.vue"
import About from "./components/About.vue"
import Contact from "./components/Contact.vue"

export default {
	name: "App",
	data: function() {
		return {
			cardTitle: "White Cat",
			selectedComponent: Card,
		}
	},
	components: {
		Card, //appCard: Card
		About,
		Contact,
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
