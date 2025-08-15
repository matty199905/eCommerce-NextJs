import { createSlice } from "@reduxjs/toolkit";
import { productosXCategorias, TotalProducts } from "../../Data/productsData";


type ProductsState = {
    productos: Record<string, any>,
    totalProducts: number
}

export const productosInitialState: ProductsState = {
    productos: productosXCategorias,
    totalProducts: TotalProducts,
}

export const productosSlice = createSlice({
    name: 'productos',
    initialState: productosInitialState,
    reducers: {

        getProducts: (state) => {
            return state

        }
    }
})

export const {getProducts} = productosSlice.actions 

export default productosSlice.reducer