<template>
	<div class="row">
		<form>
			<div class="row">
				<div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
					<label for="">You can saying...</label>
					<textarea
						class="form-group"
						v-model="item"
						name=""
						id=""
						cols="30"
						row="10"
					></textarea>
				</div>
			</div>

			<div class="row">
				<div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
					<button class="btn btn-success" @click.prevent="createNew">
						Add
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			item: "",
		}
	},
	methods: {
		createNew() {
			this.$emit("itemAdd", this.item)
			this.item = ""
		},
	},
}
</script>

<style scoped>
textarea {
	width: 100%;
	resize: none;
}

form {
  width: 100%;
}
</style>
