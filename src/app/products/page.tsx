import React from 'react'
import { ProductsWrapperPage } from './pageStyled'
import IntroPageContainer from '@/Components/IntroPageContainer/IntroPageContainer'
import ProductsWrapper from '@/Components/Products/ProductsWrapper/ProductsWrapper'




const Productos: React.FC = () => {
    return (
        <ProductsWrapperPage>

            <IntroPageContainer
                background={'/img/ProductosImg.jpg'}
                title={'Nuestros Productos'}
            />


            <ProductsWrapper 
            page='todosLosProductos' />




        </ProductsWrapperPage>
    )
}

export default Productos