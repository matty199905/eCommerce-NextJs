import React from 'react'
import { CamasMultiposicionWrapper } from './pageStyled'
import IntroPageContainer from '@/Components/IntroPageContainer/IntroPageContainer'
import ProductsWrapper from '@/Components/Products/ProductsWrapper/ProductsWrapper'





const Multiposicion: React.FC = () => {
  return (
    <CamasMultiposicionWrapper>


      <IntroPageContainer
        background={'/img/MultiposicionPage.jpg'}
        title={'Camas Multiposicion'}
      />

      <ProductsWrapper 
      hideFilters={true}
      page='camas multiposiciones'/>


    </CamasMultiposicionWrapper>
  )
}

export default Multiposicion