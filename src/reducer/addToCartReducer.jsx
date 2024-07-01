import React from "react";

const addToCartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { product, amount } = action.payload;
      //   console.log(product, amount);

      let newCart = [...state.cart];
      let itemExists = false;
      let cartProduct = {
        id: product.id,
        title: product.title,
        amount,
        image: product.image,
        price: product.price,
        category: product.category,
      };

      for (let i = 0; i < newCart.length; i++)
        if (newCart[i].id === cartProduct.id) {
          if (cartProduct.amount > 0) newCart[i].amount = cartProduct.amount;
          else newCart[i].amount = 1;

          itemExists = true;
          break;
        }

      if (itemExists)
        return {
          ...state,
          cart: [...newCart],
        };
      else
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter((e) => e.id != action.payload);

      return {
        ...state,
        cart: [...updatedCart],
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "CALCULATE_TOTAL_AMOUNT":
      let totalPrice = state.cart.reduce((initialValue, elem) => {
        const { amount, price } = elem;
        initialValue += price * amount;
        return initialValue;
      }, 0);

      let shippingFee;
      if (totalPrice > 0) shippingFee = 2;
      else shippingFee = 0;

      return {
        ...state,
        totalAmount: totalPrice,
        shippingFee: shippingFee,
        grandTotal: totalPrice + shippingFee,
      };

    default:
      return state;
  }
};

export default addToCartReducer;
