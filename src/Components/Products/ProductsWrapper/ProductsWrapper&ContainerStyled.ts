'use client'
import { motion } from "framer-motion";
import styled from "styled-components";


type ProductsPageProps = {
  $hide?: boolean,
  $showFilters?: boolean
  onClick?: () => void
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  $hideFilters?: boolean,
  $showFilters?: boolean,
}

export const ProductsWrapperContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
width: 100%;
padding-bottom: 100px;
`


export const ButtonFiltersContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 70px;
width: 100vw;
`


export const MostrarFiltros = styled.button<ButtonProps>`
display: ${({$hideFilters})=>($hideFilters === true ? 'none' : 'flex')};
justify-content:center;
align-items: center;
gap: 20px;
color: ${({$showFilters})=>($showFilters === true ? 'orange' : 'black')};
margin: 20px 0px 0px 20px;
background-color: whitesmoke;
border: none;
font-size: 14px;
letter-spacing: 0.6px;
font-weight: 600;
cursor: pointer;
padding-bottom: 10px;
transition: all ease .2s;
  &:hover{ 
    color: orange;
    transition: all ease .2s;
  }
`

export const DeleteFilter = styled(MostrarFiltros)`
margin-top: 10px;
padding: 10px 20px;
font-size: 10px;
border: solid 1px black;
border-radius: 20px;
  &:hover{ 
    background-color: orange;
    color: white;
    transform: scale(1.08);
    transition: all ease .2s;
  }
`


export const ArrowStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0px 0px 0px -10px;
`



export const ProductsContainerStyled = styled.div<ProductsPageProps>`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;
flex-flow: row wrap;
width: 90%;
height: auto;
padding: 20px;
@media (max-width: 400px) {
width: 80%;
}
`


export const PagesContainer = styled.div<ProductsPageProps>`
display: ${({$hide})=>($hide === true ? 'none' : 'flex')};
justify-content: center;
align-items: center;
gap: 20px;
margin: 40px 0 0 0 ;
`


