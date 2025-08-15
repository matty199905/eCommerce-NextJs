'use client';
import React from 'react';
import { CuotasContainer, Price, PriceOFF, PricesOffContainer, ProductCardContainer, ProductDetailsContainer, ProductImgContainer, ProductWrapper } from './pageStyled';
import Button from '@/UI/Button/Button';
import { formatPrice } from '@/Utils/formatPrice';
import { useDispatch } from 'react-redux';
import { addToCart, showCartToggle } from '@/Redux/Cart/cartSlice';
import { AppDispatch } from '@/Redux/store';
import { ProductCardProps } from '@/Components/Products/ProductCard/ProductCard';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';




const ProductoDinamico: React.FC = () => {



    // const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>();

    const searchParams = useSearchParams();
    const entries = Object.fromEntries(searchParams.entries());

    const dinamicProduct: ProductCardProps = {
        img: entries.img,
        title: entries.title,
        price: Number(entries.price),
        desc: entries.desc,
        id: Number(entries.id),
    }



    const descuento = dinamicProduct.price * 0.20

    const router = useRouter()


    return (
        <ProductWrapper>

            <ProductCardContainer>

                <ProductImgContainer style={{ backgroundImage: `url(${dinamicProduct.img})` }} />

                <ProductDetailsContainer>

                    <h1>{dinamicProduct.title}</h1>
                    <h2>{dinamicProduct.desc}</h2>

                    <Price>
                        <p>Precio:</p>
                        <span>{formatPrice(dinamicProduct.price)}</span>
                    </Price>

                    <PriceOFF>
                        <p>Abonando en Efectivo <span className='off'>20% OFF :</span></p>

                        <PricesOffContainer>
                            <span className='cross'>{formatPrice(dinamicProduct.price)}</span>

                            <span className='orange'>{formatPrice(dinamicProduct.price - descuento)}</span>
                        </PricesOffContainer>
                    </PriceOFF>


                    <CuotasContainer>
                        <span>12 Cuotas sin interés abonando con</span>
                        <img src='/img/Visa.png' alt="LogoVisa" />
                    </CuotasContainer>

                    <Button productoDinamico={true} onClick={() => {
                        if (window.confirm('¿Desea agregar este producto al carrito?')) {
                            dispatch(addToCart(dinamicProduct));
                            router.push('/products');
                            dispatch(showCartToggle())
                        }
                    }


                    }>
                        Agregar al Carrito
                    </Button>

                </ProductDetailsContainer>



            </ProductCardContainer>




        </ProductWrapper>

    )
}

export default ProductoDinamico
