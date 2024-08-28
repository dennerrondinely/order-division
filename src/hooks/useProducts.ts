import React from "react";
import { ProductsContext } from "../providers/ProductsProvider";

export const useProducts = () => {
  const context = React.useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
