import React from 'react'
import { CuotasSinInteresContainer, DoceCuotasSinInteresContainer, ImgContainer, NumeroCuotas, ProductsTitleContainer } from './IntroStyled'




type IntroPAgeProps = {
  background: string,
  title: string,
}


const IntroPageContainer: React.FC<IntroPAgeProps> = ({background, title}) => {
  return (

    <ImgContainer style={{ backgroundImage: `url(${background})` }}>

    <ProductsTitleContainer>
        <h1>{title}</h1>
        <DoceCuotasSinInteresContainer>

            <NumeroCuotas>12</NumeroCuotas>
            <CuotasSinInteresContainer>CUOTAS SIN INTERÉS
                <img src='/img/VIsa.png' alt="Visa" />
            </CuotasSinInteresContainer>
        </DoceCuotasSinInteresContainer>
        <span>O 20% DE DESCUENTO EN EFECTIVO ABONANDO EN NUESTRAS SUCURSALES</span>
    </ProductsTitleContainer>
</ImgContainer>

  )
}

export default IntroPageContainer
