import React from 'react'
import { CheckoutCardContainer, ImgTitleContainer, PriceContainer, Quantity, QuantityPriceContainer } from './CardStyled'



type CardProductProps = {
    img?: string,
    price: number,
    title?: string,
    quantity: number,
    orderOverview?: boolean,
}


const CheckoutCardProduct: React.FC<CardProductProps> = ({ img, price, title, quantity, orderOverview }) => {



    return (
        <CheckoutCardContainer $orderOverview={orderOverview}>

            <ImgTitleContainer>

                <img src={img} alt={title} />
                <h2>{title}</h2>

            </ImgTitleContainer>

            <QuantityPriceContainer>

                <PriceContainer>Price: {price}</PriceContainer>
                <Quantity><span>{quantity}</span></Quantity>

            </QuantityPriceContainer>



        </CheckoutCardContainer>
    )
}

export default CheckoutCardProduct
