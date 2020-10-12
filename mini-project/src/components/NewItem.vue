<template>
	<div class="row">
		<form>
			<div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
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

			<div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
				<button class="btn btn-success" @click.prevent="createNew">Add</button>
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
}
</script>

<style></style>
