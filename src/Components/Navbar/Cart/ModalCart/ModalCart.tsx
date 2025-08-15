'use client'
import React from 'react'
import { CartHeader, CloseIcon, IconsContainer, ModalCartContainer, PriceContainer, ProductInfoContainer, ProductsCartContainer, TitleContainer } from './ModalCartStyled'
import { IoIosArrowRoundForward } from "react-icons/io";
import Submit from '../../../../UI/Submit/Submit'
import CardCartProduct from './CardCartProduct';
import { GoTrash } from "react-icons/go";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux'
import { formatPrice } from '../../../../Utils/formatPrice'
import { AnimatePresence } from 'framer-motion';
import { TrashIcon } from './CardCartProductStyled';
import { useSelectorTS } from '../../../../Utils/constants';
import { AppDispatch } from '../../../../Redux/store';
import { removeAllFromCart, showCartToggle } from '../../../../Redux/Cart/cartSlice';







const ModalCart: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const {currentUser} = useSelectorTS(state => state.user)
    const { cartProducts } = useSelectorTS(state => state.cart);
    const { shippingCost } = useSelectorTS(state => state.cart);
    const { showCart } = useSelectorTS(state => state.cart);


    const router = useRouter()





    const totalPrice = (cartProducts || []).map((item) => item.quantity * item.price).reduce((acc, cur) => { return acc + cur }, 0)




    return (

        <AnimatePresence>

            {showCart &&

                <ModalCartContainer
                    initial={{ translateX: 600 }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: 600 }}
                    transition={{ type: 'spring', damping: 25 }}
                    key='cart-modal'>

                    <CartHeader>
                        <TitleContainer>
                            <h2>Mi Carrito</h2>
                            <span>Total de Productos: 0</span>
                        </TitleContainer>

                        <IconsContainer >
                            <TrashIcon onClick={() => { if (window.confirm('¿Desea vaciar el carrito?') === true) { dispatch(removeAllFromCart()) } }}>
                                <GoTrash />
                            </TrashIcon>

                            <CloseIcon onClick={() => dispatch(showCartToggle())}>
                                <IoIosArrowRoundForward />
                            </CloseIcon>
                        </IconsContainer>



                    </CartHeader>


                    <ProductsCartContainer>

                        {
                            !cartProducts?.length ? <p className='empty-cart'>El carrito está vacío</p> : cartProducts.map((item) => { return <CardCartProduct {...item} key={item.id} /> })
                        }



                    </ProductsCartContainer>


                    <ProductInfoContainer>

                        <PriceContainer>
                            <h3>Envio:</h3>
                            <span>{formatPrice(shippingCost)}</span>
                        </PriceContainer>

                        <PriceContainer>
                            <h3>SubTotal:</h3>
                            <span>{formatPrice(totalPrice)}</span>
                        </PriceContainer>

                        <PriceContainer>
                            <h3>Total:</h3>
                            <span>{formatPrice(totalPrice + shippingCost)}</span>
                        </PriceContainer>

                        <Submit
                            onClick={(): void => {
                                if(currentUser) {
                                router.push('/checkout')
                            } else {router.push('/login')}; 
                                dispatch(showCartToggle()) }}
                            cart={true}
                            disabled={!cartProducts?.length}>
                            Iniciar Pedido
                        </Submit>

                    </ProductInfoContainer>







                </ModalCartContainer>


            }
        </AnimatePresence>
    )
}

export default ModalCart
