<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm a Software Developer ! I'm {{ name }} and {{ age }} years old</p>
		<button @click="changeName">Change Name</button>
		<hr />
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail
					:customName="name"
					@nameWasReset="name = $event"
					:resetNameFunc="resetName"
					:userAge="age"
				></app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit
					:userAge="age"
					@ageWasEdit="age = $event"
				></app-user-edit>
			</div>
		</div>
	</div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
	data: function() {
		return {
			name: "Zendy",
			age: 18,
		}
	},
	methods: {
		changeName() {
			this.name = "Duc Nguyen"
		},
		resetName() {
			this.name = "Zendy"
		},
	},
	components: {
		appUserDetail: UserDetail,
		appUserEdit: UserEdit,
	},
}
</script>

<style scoped>
div {
	background-color: lightblue;
}
</style>
