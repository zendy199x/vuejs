export const productMixin = {
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
      );
    },
  },
};
