import React from 'react'
import { ComedoresWrapper } from './pageStyled'
import IntroPageContainer from '@/Components/IntroPageContainer/IntroPageContainer'
import ProductsWrapper from '@/Components/Products/ProductsWrapper/ProductsWrapper'



const Comedores: React.FC = () => {
  return (
<ComedoresWrapper>


<IntroPageContainer
background={'/img/comedoresPage.jpeg'}
title={'Comedores'}
/>

<ProductsWrapper
      hideFilters={true}
      page='comedores'/>

</ComedoresWrapper>
  )
}

export default Comedores
