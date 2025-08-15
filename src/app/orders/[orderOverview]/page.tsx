'use client';
import React, { useEffect, useState } from 'react';
import { CardsContainer, EnvioStyled, HrStyled, OverwiewWrapper, PriceContainerStyled, PriceTotalStyled, SubtotalStyled, TotalStyled } from './pageStyled';
import CheckoutCardProduct from '@/Components/Checkout/Products/CheckoutCardProduct';
import { formatPrice } from '@/Utils/formatPrice';
import { CartProduct } from '@/Redux/Cart/cartSlice';



const OrderOverview: React.FC = () => {

   const [order, setOrder] = useState<OrderState | null>(null);

  type OrderState = {
    createdAt: string,
    items: CartProduct[],
    price: number,
    shippingCost: number,
    shippingDetails:
    { name: string, cellphone: string, location: string, address: string },
    status: string,
    total: number,
    user: string,
    __v: number,
    _id: string,
  }

 
console.log('order', order)

const price = order ? order.items.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;



  useEffect(()=>{
    const storedOrder = localStorage.getItem('selectedOrder');
      if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  },[])

  return (
    <OverwiewWrapper>



      <h1>Productos de la orden: <span>
        {order?._id.slice(15)}
        </span></h1>


      <CardsContainer>

        {

          order?.items.map((item: CartProduct) => <CheckoutCardProduct orderOverview={true} {...item} key={item.id} />)

        }


      </CardsContainer>




      <PriceContainerStyled>

        <SubtotalStyled>
          <p>Costo de productos</p>
          <span>
            {formatPrice(price)}
            </span>
        </SubtotalStyled>

        <EnvioStyled>
          <p>Envío:</p>
          <span>
            {formatPrice(order?.shippingCost ?? 0)}
            </span>
        </EnvioStyled>

        <HrStyled />

        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>
            {formatPrice((order?.shippingCost ?? 0) + price)}
            </PriceTotalStyled>
        </TotalStyled>

      </PriceContainerStyled>



    </OverwiewWrapper>
  )
}

export default OrderOverview
