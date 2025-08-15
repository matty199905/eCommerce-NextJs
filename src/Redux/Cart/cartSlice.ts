import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addItemToCart, decreaseProducts, increaseProductCart, removeItemFromCart, ShippingCostByProducts } from "./cartUtils";
import { SHIPPINGCOST } from "../../Utils/constants";
import { ProductCardProps } from "../../Components/Products/ProductCard/ProductCard";




export type CartProduct = {
    id: number;
    quantity: number;
    price: number;
    img: string,
    title: string,

}


type CartState = {
    cartProducts: CartProduct[];
    showCart: boolean;
    shippingCost: number;
}






const cartInitialState: CartState = {
    cartProducts: [],
    showCart: false,
    shippingCost: 0,
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {

        addToCart: (state, action: PayloadAction<ProductCardProps>) => {
            return {
                ...state,
                cartProducts: addItemToCart(state.cartProducts, action.payload),
                shippingCost: SHIPPINGCOST,
            }
        },

        removeAllFromCart: (state) => {
            return {
                ...state,
                cartProducts: [],
                shippingCost: 0,
            }
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                cartProducts: removeItemFromCart(state.cartProducts, action.payload),
                shippingCost: ShippingCostByProducts(state.cartProducts, SHIPPINGCOST),
            }
        },

        showCartToggle: (state) => {
            return {
                ...state,
                cartProducts: state.cartProducts,
                showCart: !state.showCart,
            }
        },
        plusBtn: (state, action) => {


            return {
                ...state,
                cartProducts: increaseProductCart(state.cartProducts, action.payload),
                shippingCost: SHIPPINGCOST,


            }

        },
        minusBtn: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                cartProducts: decreaseProducts(state.cartProducts, action.payload),
                shippingCost: ShippingCostByProducts(state.cartProducts, SHIPPINGCOST)
            }
        }

    }
})


export const { addToCart, removeAllFromCart, removeFromCart, showCartToggle, plusBtn, minusBtn } = cartSlice.actions
export default cartSlice.reducer