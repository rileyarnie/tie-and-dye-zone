import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  description: string;
  price: string;
  color: string;
  category: string;
}

export interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
