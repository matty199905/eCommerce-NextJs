import axios from 'axios'
import { APIURL } from '../Utils/constants'
import { addOrders, fetchOrdersEnd, fetchOrdersStart, orderFail } from '../Redux/Orders/ordersSlice';
import { CartProduct } from '../Redux/Cart/cartSlice';
import { Dispatch } from '@reduxjs/toolkit';



type OrderData = {
  items: CartProduct[], 
  price: number, 
  shippingCost: number, 
  total: number, 
  shippingDetails: {
    address: string,
    cellphone: string,
    location: string,
    name: string,
  },
}


export const createOrder = async (orderData: OrderData, token: string | undefined, dispatch: Dispatch) => {


    try {
     
  const response = await axios.post(`${APIURL}/orders`, orderData, {
   headers: {
      "x-token": token}
  })
  
      if (response) {

        if (!token) {
          return dispatch(orderFail("Token no proporcionado"));
        }
        
       return getOrders(token, dispatch);
       
      }
    } catch (error: any) {
     return dispatch(orderFail(error.message))
     
    }
  };


  export const getOrders = async (token: string | undefined, dispatch: Dispatch) => {

    dispatch(fetchOrdersStart())
  
    try {
      const orders = await axios.get(`${APIURL}/orders`, {
        headers: {
          'x-token': token,
        },
      });
      if (orders) {
        
    dispatch(addOrders(orders.data.data))

      } 

    dispatch(fetchOrdersEnd())

    } catch (error: any) {
    return dispatch(orderFail(error.message))
    
    }
  };