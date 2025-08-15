import React from 'react';
import { RelaxWrapper } from './pageStyled';
import IntroPageContainer from '@/Components/IntroPageContainer/IntroPageContainer';
import ProductsWrapper from '@/Components/Products/ProductsWrapper/ProductsWrapper';

const RelaxPage: React.FC = () => {

  return (
    <RelaxWrapper>

      <IntroPageContainer
        background={'/img/RelaxIntroPage.jpg'}
        title={'Productos Relax'}
      />


      <ProductsWrapper
        hideFilters={true}
        page='relax' />

    </RelaxWrapper>
  )
}

export default RelaxPage
