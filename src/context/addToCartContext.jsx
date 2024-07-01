import { createContext, useContext, useEffect, useReducer } from "react";
import addToCartReducer from "../reducer/addToCartReducer";

const AddToCartContext = createContext();

const getCartItems = () => {
  // let localData = localStorage.getItem("FlexCart");

  // console.log(localData);
  // if (localData == []) return [];
  // else
  // console.log(JSON.parse(localData));
  // console.log(localData);
  // if (JSON.parse(localData).length === 0) {
  //   return [];
  // } else return JSON.parse(localData);

  try {
    const localData = localStorage.getItem("FlexCart");
    return localData ? JSON.parse(localData) : [];
  } catch (error) {
    console.error("Failed to parse cart items from localStorage", error);
    return [];
  }
};

const initialState = {
  // cart: [],
  cart: getCartItems(),
  totalAmount: 0,
  shippingFee: 0,
  grandTotal: 0,
};

const AddToCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addToCartReducer, initialState);

  const addToCart = (product, amount) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, amount } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    localStorage.setItem("FlexCart", JSON.stringify(state.cart));
    dispatch({ type: "CALCULATE_GRAND_TOTAL" });
    dispatch({ type: "CALCULATE_TOTAL_AMOUNT" });
  }, [state.cart]);

  return (
    <AddToCartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(AddToCartContext);
};

export { AddToCartProvider, useCartContext };
