<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
      <h3>Filter Products From List Component</h3>
      <button
        class="btn btn-block btn-danger mb-md-3"
        @click="products.push('Mixins')"
      >
        Add New Item
      </button>
      <input type="text" class="form-control mb-md-3" v-model="filterProduct" />
      <div class="card">
        <div class="card-body">
          <ul>
            <li v-for="product in filteredProduct" :key="product">
              {{ product }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productMixin } from "./../mixins/productMixin";

export default {
  created() {
    console.log("created List");
  },
  mixins: [productMixin],
};
</script>

<style></style>
