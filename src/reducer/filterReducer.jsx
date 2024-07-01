import FormatPrice from "../helper/FormatPrice";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let allPrice = action.payload.map((e) => e.price);
      let maxPrice = Math.max(...allPrice) + 15; //278,587.21
      let minPrice = Math.min(...allPrice);

      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          price: maxPrice,
          minPrice: minPrice,
        },
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };
    case "SORT_VALUE":
      return {
        ...state,
        sort: action.payload,
      };
    case "SORT_PRODUCT":
      let sortedData;
      const { filterProducts, sort } = state;
      let tempData = [...filterProducts];

      const sortingData = (a, b) => {
        if (sort == "lowest") return a.price - b.price;
        else if (sort == "highest") return b.price - a.price;
        else if (sort == "a-z") return a.title.localeCompare(b.title);
        else if (sort == "z-a") return b.title.localeCompare(a.title);
      };

      sortedData = tempData.sort(sortingData);

      return {
        ...state,
        filterProducts: sortedData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    case "FILTER_PRODUCT":
      let { allProducts } = state;
      let tempProd = [...allProducts];

      const { text, category, rating, price } = state.filters;

      if (text)
        tempProd = tempProd.filter((e) => {
          return e.title.toLowerCase().includes(text);
        });

      if (category != "All")
        tempProd = tempProd.filter((e) => {
          return e.category === category;
        });

      if (rating != "All")
        tempProd = tempProd.filter((e) => {
          return (
            e.rating.rate >= rating && e.rating.rate < parseInt(rating) + 1
          );
        });

      if (price)
        tempProd = tempProd.filter((e) => {
          return e.price <= price;
        });

      return {
        ...state,
        filterProducts: tempProd,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          rating: "All",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
