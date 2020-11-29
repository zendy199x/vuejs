<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
      <h3>Filter Products From List Component</h3>
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
export default {
  data() {
    return {
      products: ["Apple", "Samsung", "HTC", "Nokia", "Huawei", "Oppo"],
      filterProduct: "",
    };
  },
  computed: {
    filteredProduct() {
      return this.products.filter((el) =>
        el.toLowerCase().includes(this.filterProduct.toLowerCase())
      ); // can use includes prototype
    },
  },
};
</script>

<style></style>
