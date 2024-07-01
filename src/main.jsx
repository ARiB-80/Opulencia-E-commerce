import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { FilterContextProvider } from "./context/filterContext.jsx";
import { AddToCartProvider } from "./context/addToCartContext.jsx";
import { AppProvider } from "./context/productContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-hgincvklbzt3qurd.us.auth0.com"
      clientId="ZxbQ8yKQ9tjGMWYq8WuTWqQ7MROIdx7j"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <AppProvider>
        <FilterContextProvider>
          <AddToCartProvider>
            <App />
          </AddToCartProvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);
