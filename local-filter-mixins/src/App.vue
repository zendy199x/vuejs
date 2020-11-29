<template>
  <div class="container">
    <div clas="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Filter & Mixins</h1>
        <p>{{ text | toLowerCase | toUpperCase }}</p>
      </div>
    </div>
    <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
      <h3>Filter Products</h3>
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
    <List></List>
  </div>
</template>

<script>
import { productMixin } from "./mixins/productMixin";
import List from "./components/List.vue";

export default {
  components: {
    List,
  },
  mixins: [productMixin],
  data() {
    return {
      text: "Hello everywhere, VueJS",
      // products: ["Apple", "Samsung", "HTC", "Nokia", "Huawei", "Oppo"],
      // filterProduct: "",
    };
  },
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    },
  },
  // computed: {
  //   filteredProduct() {
  //     return this.products.filter((el) =>
  //       el.toLowerCase().match(this.filterProduct.toLowerCase())
  //     ); // can use includes prototype
  //   },
  // },
};
</script>

<style></style>
