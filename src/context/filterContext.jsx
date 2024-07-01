import {
  Children,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useProductContext } from "./productContext";
import filterReducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sort: "lowest",
  filters: {
    text: "",
    category: "All",
    rating: "All",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  //   console.log("products", products);

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const clearFilters = () => {
    return dispatch({ type: "CLEAR_FILTERS" });
  };

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const sort = (e) => {
    let sortVal = e.target.value;
    dispatch({ type: "SORT_VALUE", payload: sortVal });
  };

  const updateValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCT" });
    dispatch({ type: "SORT_PRODUCT" });
  }, [state.sort, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sort,
        updateValue,
        clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
