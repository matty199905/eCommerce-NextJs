import React from 'react'
import { Price, ProductCardContainer, ColumnContainer, TitlePriceContainer } from './ProductCardStyle'

import Button from '../../../UI/Button/Button'
import Link from "next/link";
import { formatPrice } from '../../../Utils/formatPrice'


export type ProductCardProps = {
  img: string,
  title: string,
  price: number,
  desc: string,
  id: number,

}


const ProductCard: React.FC<ProductCardProps> = ({ img, title, price, desc, id }) => {


  const selectedProduct = { img, title, price, desc, id }


  return (
    <ProductCardContainer>
      <img src={img} alt={desc} />


      <TitlePriceContainer>


        <ColumnContainer>
          <h2>{title}</h2>
          <span>{desc}</span>
        </ColumnContainer>

        <ColumnContainer>
          <Price>{formatPrice(price)}</Price>
          <Link href={{pathname: `/products/${title}` , query: selectedProduct }} ><Button>Ver Más</Button></Link>
        </ColumnContainer>

      </TitlePriceContainer>

    </ProductCardContainer>
  )
}

export default ProductCard
