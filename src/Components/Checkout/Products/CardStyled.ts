'use client'
import styled from "styled-components";


type CardProps = {
    $orderOverview?: boolean
}

export const CheckoutCardContainer = styled.div<CardProps>`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
width: ${({$orderOverview})=>($orderOverview === true ? '300px' : '100%')};
height: 110px;
border-radius: 5px;
background: ${({$orderOverview})=>($orderOverview === true ? 'linear-gradient(to bottom, rgb(88, 88, 88), rgb(58, 58, 58))' : 'linear-gradient(to bottom, rgb(141, 141, 141), rgb(58, 58, 58));')}; 
padding: 15px 10px;
`

export const ImgTitleContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
img{width: 150px;
    height: 90px;
margin-bottom:-5px;
border-radius:10px;
@media (max-width: 400px) {
    width: 100px;
}
}
h2{color: rgba(255, 255, 255, 0.8);
font-size:16px;
font-weight:500;
font-style: oblique;
margin: 15px 0px 0px 5px ;
}

`

export const QuantityPriceContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
`


export const PriceContainer = styled.div`
align-self: last baseline;
font-size: 16px;
font-weight: 500;
font-style: oblique;
background-color: darkblue;
opacity: 0.7;
color: white;
padding: 15px;
border-radius: 5px;
@media (max-width: 400px) {
    width:70px;
    text-align: center;
}
`

export const Quantity = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:rgba(255, 255, 255, 0.76);
border-radius: 50%;
width: 40px;
height: 40px;
span{
    color: black;
    opacity: 0.9;
    font-size: 18px;
    font-weight: 500;
}
`