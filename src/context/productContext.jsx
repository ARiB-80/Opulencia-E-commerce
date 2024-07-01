import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import productReducer from "../reducer/productReducer";

const AppContext = createContext();
//https://fakestoreapi.com/docs
const API = "https://fakestoreapi.com/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  topRatedProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "LOADING_PRODUCTS" });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //SINGLE PROD API
  const getSingleProduct = async (url) => {
    dispatch({ type: "LOADING_SINGLE_PRODUCT" });

    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_API_SINGLE", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "API_ERROR_SINGLE" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
