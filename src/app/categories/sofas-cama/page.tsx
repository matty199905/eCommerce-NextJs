import React from 'react'
import { SofasCamaWrapper } from './pageStyled'
import IntroPageContainer from '@/Components/IntroPageContainer/IntroPageContainer'
import ProductsWrapper from '@/Components/Products/ProductsWrapper/ProductsWrapper'

const SofasCama: React.FC = () => {
  return (
<SofasCamaWrapper>

<IntroPageContainer
background={'/img/sofacamaPage.jpg'}
title={'Sofás Cama'}
/>


<ProductsWrapper 
      hideFilters={true}
      page='sofas cama'/>


</SofasCamaWrapper>
  )
}

export default SofasCama
