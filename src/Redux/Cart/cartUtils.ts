import { ProductCardProps } from "../../Components/Products/ProductCard/ProductCard";
import { CartProduct } from "./cartSlice";


export const addItemToCart = (cartProducts: CartProduct[], product: ProductCardProps) => {

    const productInCart = cartProducts.find((item) => item.id === product.id);

    if (productInCart) {

        return cartProducts.map((item) =>

            item.id === productInCart.id ? { ...item, quantity: item.quantity + 1 } : item
        )
    }

    return [...cartProducts, { ...product, quantity: 1 }];
}



export const removeItemFromCart = (cartProducts: CartProduct[], id: number) => {

    return cartProducts.filter(item => item.id !== id);

}



export const ShippingCostByProducts = (cartProducts: CartProduct[], SHIPPINGCOST: number) => {

    if (cartProducts.length === 1 && cartProducts[0].quantity === 1) {
        return SHIPPINGCOST = 0
    }

    return SHIPPINGCOST

}


export const increaseProductCart = (cartProducts: CartProduct[], id: number) => {

    return cartProducts.map((item) =>

        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
}



export const decreaseProducts = (cartProducts: CartProduct[], id: number) => {

    const existingProduct = cartProducts.find((item) => { return (item.id === id) && (item.quantity === 1) })


    if (existingProduct) {
window.confirm("¿Desea borrar el producto del carrito?");
        return cartProducts.filter((items) => items.id !== id)

    }

    else {
        return cartProducts.map((item) => {

           
           return item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        }
        )
    }

}