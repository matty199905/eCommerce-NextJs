import React from 'react'
import {
    CardProductStyled,
    HandlerAndPriceCardContainer,
    HandlerIconStyled,
    HandlerQuantityContainer,
    ImgTitleCardContainer,
    Price,
    TrashIcon
  } from './CardCartProductStyled';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { minusBtn, plusBtn, removeFromCart } from '../../../../Redux/Cart/cartSlice';
import { AppDispatch } from '../../../../Redux/store';


type ProductProps = {
    id: number,
    title?: string,
    img?: string,
    price: number,
    quantity: number,
}

const CardCartProduct: React.FC<ProductProps> = ({title, img, price, quantity, id}) => {

const dispatch = useDispatch<AppDispatch>()




    return (
        <CardProductStyled>

            <TrashIcon $card={true} onClick={() =>{ if(window.confirm('¿Desea borrar este producto del carrito?')) {return dispatch(removeFromCart(id))}}}>
                <GoTrash />
            </TrashIcon>

            <ImgTitleCardContainer>

                <img src={img} alt="producto" />
                <h2>{title}</h2>

            </ImgTitleCardContainer>




            <HandlerAndPriceCardContainer>

                <HandlerQuantityContainer>
                    <HandlerIconStyled onClick={()=> dispatch(minusBtn(id))}><FaCircleMinus /></HandlerIconStyled>
                    <span>{quantity}</span>
                    <HandlerIconStyled onClick={()=> dispatch(plusBtn(id))}><FaCirclePlus /></HandlerIconStyled>
                </HandlerQuantityContainer>

                <Price>Price: {price}</Price>
            </HandlerAndPriceCardContainer>

        </CardProductStyled>
    )
}

export default CardCartProduct
