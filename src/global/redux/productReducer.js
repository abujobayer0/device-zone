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
    default:
      return state;
  }
};

export default productReducer;
