// productReducer.js
const initialState = {
  selectedProduct: null,
  selectedProductForDetail: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT_TO_EDIT":
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case "SELECT_PRODUCT_DETAIL":
      return {
        ...state,
        selectedProductForDetail: action.payload,
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "CART_ADDED_SIGNAL":
      return {
        ...state,
        cartAddSignal: action.payload,
      };
    case "PAYMENT_PRODUCT":
      return {
        ...state,
        paymentProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
