import React from 'react'
import { LivingWrapper } from './pageStyled'
import IntroPageContainer from '@/Components/IntroPageContainer/IntroPageContainer'
import ProductsWrapper from '@/Components/Products/ProductsWrapper/ProductsWrapper'

const Living: React.FC = () => {
  return (
    <LivingWrapper>


<IntroPageContainer
background={'/img/LivingPage.png'}
title={'Productos Living'}
/>

<ProductsWrapper 
      hideFilters={true}
      page='living'/>

    </LivingWrapper>
  )
}

export default Living
