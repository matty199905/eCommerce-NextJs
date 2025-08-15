import React from 'react'
import { MesasExtensiblesWrapper } from './pageStyled'
import IntroPageContainer from '@/Components/IntroPageContainer/IntroPageContainer'
import ProductsWrapper from '@/Components/Products/ProductsWrapper/ProductsWrapper'



const MesasExtensibles: React.FC = () => {
  
  return (
<MesasExtensiblesWrapper>

<IntroPageContainer
background={'/img/Mesaextensible.jpg'}
title={'Mesas Extensibles'}
/>

<ProductsWrapper
      hideFilters={true}
      page="mesas extensibles"/>

</MesasExtensiblesWrapper>
  )
}

export default MesasExtensibles
