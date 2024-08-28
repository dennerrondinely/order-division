import React from "react";
import { createContext, useState } from "react";

interface Product {
  name: string;
  price: number;
}

interface ProductsContextData {
  products: Product[];
  handleProductNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleProductPriceChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  addProduct: () => void;
}

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsContext = createContext<ProductsContextData>({
  products: [],
  handleProductNameChange: () => {},
  handleProductPriceChange: () => {},
  addProduct: () => {},
});

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const handleProductNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductName(event.target.value);
  };
  const handleProductPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductPrice(Number(event.target.value));
  };
  const addProduct = () => {
    setProducts([...products, { name: productName, price: productPrice }]);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        handleProductNameChange,
        handleProductPriceChange,
        addProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
