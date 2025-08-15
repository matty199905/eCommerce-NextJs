import React from 'react'
import { CardsWrapperStyled, EnvioStyled, HrStyled, PriceContainerStyled, PriceTotalStyled, ProductosContainerStyled, ProductsTitleStyled, SubtotalStyled, TotalStyled } from './ProductsCheckoutStyled'
import CheckoutCardProduct from './CheckoutCardProduct'
import { formatPrice } from '../../../Utils/formatPrice'
import { useSelectorTS } from '../../../Utils/constants'
import { CartProduct } from '../../../Redux/Cart/cartSlice'





const ProductsCheckout: React.FC = () => {


  const {cartProducts} = useSelectorTS(state => state.cart)

  const { shippingCost } = useSelectorTS(state => state.cart)


  const totalPrice = cartProducts.map((item: CartProduct) => item.quantity * item.price).reduce((acc, cur) => { return acc + cur }, 0)


  return (
    <ProductosContainerStyled>

    <ProductsTitleStyled>Tu Pedido</ProductsTitleStyled>


    <CardsWrapperStyled>

{
  cartProducts.map((item: CartProduct)=>{return <CheckoutCardProduct {...item} key={item.id}/>})
}

    </CardsWrapperStyled>


    <PriceContainerStyled>

      <SubtotalStyled>
        <p>Subtotal</p>
        <span>{formatPrice(totalPrice)}</span>
      </SubtotalStyled>

      <EnvioStyled>
        <p>Envío:</p>
        <span>{formatPrice(shippingCost)}</span>
      </EnvioStyled>

      <HrStyled />
      
      <TotalStyled>
        <p>Total:</p>
        <PriceTotalStyled>{formatPrice(totalPrice + shippingCost)}</PriceTotalStyled>
      </TotalStyled>

    </PriceContainerStyled>

  </ProductosContainerStyled>
  )
}

export default ProductsCheckout
