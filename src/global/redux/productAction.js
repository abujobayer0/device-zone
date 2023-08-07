// productActions.js
export const selectProductToEdit = (productData) => ({
  type: "SELECT_PRODUCT_TO_EDIT",
  payload: productData,
});
export const ProductDetails = (productData) => ({
  type: "SELECT_PRODUCT_DETAIL",
  payload: productData,
});
export const SearchQuery = (searchQuery) => ({
  type: "SEARCH_QUERY",
  payload: searchQuery,
});
export const CartAddedSignal = (cartAddSignal) => ({
  type: "CART_ADDED_SIGNAL",
  payload: cartAddSignal,
});
export const PaymentProduct = (paymentProduct) => ({
  type: "CART_ADDED_SIGNAL",
  payload: paymentProduct,
});
