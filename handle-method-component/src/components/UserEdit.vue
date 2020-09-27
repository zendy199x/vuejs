<template>
	<div class="component">
		<h3>You may edit the User here</h3>
		<p>Edit me !</p>
		<p>My Age: {{ userAge }}</p>

		<button @click="editAge">Change My Age</button>
	</div>
</template>

<script>
import {eventBus} from "../main"

export default {
	props: {
		userAge: Number,
	},
	methods: {
		editAge() {
			this.userAge = 27
			// this.$emit("ageWasEdit", this.userAge)
			eventBus.$emit("ageWasEdit", this.userAge)
		},
	},
}
</script>

<style scoped>
div {
	background-color: lightgreen;
}
</style>
