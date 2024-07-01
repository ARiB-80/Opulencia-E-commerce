const productReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_DATA":
      return { ...state, isLoading: true };
    case "API_ERROR":
      return { ...state, isLoading: false, isError: true };
    case "SET_API_DATA":
      const topRatedProducts = [];
      {
        // action.payload.forEach((product) => {
        //   console.log(product.id, " RATE: ", product.rating.rate);
        // });

        let products = action.payload;

        for (let i = 0; i < products.length; i++) {
          if (products[i].rating.rate >= 4.6) {
            topRatedProducts[i] = products[i];
          }
        }
        // console.log("MAX RATING: ", topRatedProducts);
      }

      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        topRatedProducts: topRatedProducts,
      };
    case "LOADING_SINGLE_PRODUCT":
      return { ...state, isSingleLoading: true };
    case "SET_API_SINGLE":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    case "API_ERROR_SINGLE":
      return { ...state, isSingleLoading: false, isError: true };
    default:
      return state;
  }
};

export default productReducer;
