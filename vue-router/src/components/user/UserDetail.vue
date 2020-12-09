<template>
  <div>
    <h1>User Detail</h1>
    <p>ID User: {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet
      fugit dolorum quasi consectetur exercitationem ea, dolores laborum
      laboriosam magnam fuga vero eius vitae alias perferendis quis sed tenetur
      ipsam.
    </p>
  </div>
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id
		}
	}
};
</script>

<style></style>
