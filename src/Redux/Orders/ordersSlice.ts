import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Order = {
    shippingDetails: {
        name: string,
        cellphone: string,
        location: string,
        address: string,
    },
    _id: string,
    createdAt: string,
    user: string,
    price: number,
    shippingCost: number,
    items: object[]
    status: string,
    total: number,
    __v: number,
}


type OrderState = {
    orders: null | Order[],
    loading: boolean,
    error: null | string
}

const initialState: OrderState = {
    orders: null,
    loading: false,
    error: null,
}

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {

        fetchOrdersStart: (state) => {
            return {
                ...state,
                loading: true,
            }
        },

        fetchOrdersEnd: (state) => {
            return {
                ...state,
                loading: false,
            }
        },
        addOrders: (state, action: PayloadAction<Order[]>) => {
            return {
                ...state,
                loading: false,
                orders: [...action.payload],

            }
        },

        orderFail: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

        clearOrders: (state) => {
            return {
                ...state,
                orders: null,
            }
        },

        clearError: (state) => {
            return {
                ...state,
                error: null,
            }
        }

    }
})


export const { fetchOrdersStart,
    fetchOrdersEnd,
    addOrders,
    orderFail,
    clearOrders,
    clearError } = orderSlice.actions

export default orderSlice.reducer