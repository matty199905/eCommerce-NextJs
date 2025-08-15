'use client'
import React, { useState } from 'react'
import { PagesContainer, ProductsContainerStyled } from './ProductsWrapper&ContainerStyled'
import ModalCategories from '../ModalCategories/ModalCategories'
import ProductCard from '../ProductCard/ProductCard'
import Button from '@/UI/Button/Button'
import { useSelectorTS } from '@/Utils/constants'
import { Product } from '@/Data/productsData'



type ProductsContainerProps = {
    page: string
}



const ProductsContainer: React.FC<ProductsContainerProps> = ({ page }) => {


    const Initial_Limit: number = 8

    const [limit, setLimit] = useState<number>(Initial_Limit)

    const { totalProducts } = useSelectorTS(state => state.productos)

    const { productos } = useSelectorTS(state => state.productos)

    const { selectedFilter } = useSelectorTS(state => state.filters)

    const { showFilters } = useSelectorTS(state => state.filters)





    const paginadoTodosLosProductos = productos.map(([key, array]: [string, []]) => {

        if (selectedFilter) {
            
            if (key === selectedFilter) { return array.map((item: Product) => { return <ProductCard {...item} key={item.id} /> }) }

            else {         
                return array.map((item: Product) => {
                    return item.filters.map((filter) => {
                        if (filter === selectedFilter) {
                            return <ProductCard {...item} key={item.id} />
                        }
                    })
                })
            }
        }

        else if (key === 'mesas extensibles') { return null }

        else { return array.map((item: Product) => { if (limit >= item.id) { return <ProductCard {...item} key={item.id} /> } }) }
    })






    return (
        <ProductsContainerStyled $showFilters={showFilters}>

            <ModalCategories />

            {

                page === 'todosLosProductos' ? paginadoTodosLosProductos :

                    productos.map(([key, array]: [string, []]) => { if (key === page) { return array.map((item: Product) => { return <ProductCard {...item} key={item.id} /> }) } })



            }




            {page === 'todosLosProductos' &&

                <PagesContainer $hide={selectedFilter !== null}>

                    <Button
                        onClick={() => setLimit(prevLimit => prevLimit - Initial_Limit)}
                        disabled={Initial_Limit >= limit}
                        page={true}>
                        Ver Menos</Button>


                    <Button onClick={() => setLimit(prevLimit => prevLimit + Initial_Limit)}
                        page={true}
                        disabled={totalProducts <= limit}
                    >Ver Más</Button>


                </PagesContainer>

            }

        </ProductsContainerStyled>

    )
}

export default ProductsContainer
