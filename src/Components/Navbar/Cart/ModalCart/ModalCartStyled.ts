import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalCartContainer = styled(motion.div)`
position: fixed;
top: 0px;
right: 0px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: white;
padding: 0px 40px;
height: 100vh;
width: 360px;
z-index: 500;
@media (max-width: 420px) {
    width: 90vw;
    padding: 0px 20px ;
    height: 100vh;
}
`

export const CartHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
h2{
font-size: 24px;
font-weight: 300;
font-style: oblique;
color: black;
margin-bottom: 5px;
}
span{
    font-size: 14px;
font-weight: 300;
font-style: oblique;
color: grey;
}
`

export const TitleContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

`
export const IconsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`

export const CloseIcon = styled.div`
color: black;
font-size: 30px;
transform: scaleX(1.3) ;
cursor: pointer;
transition: all ease .2s;
&:hover{
    color: orange;
    transition: all ease .2s;
}
`


export const PriceContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: -25px;
h3{
    font-size: 17px;
    font-weight: 600;
    font-style: oblique;
    color: black;  
}
span{
    font-size: 17px;
    font-weight: 500;
    color:black;
    
}
`

export const ProductsCartContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 20px;
padding: 10px 30px;
width: 100%;
height: 410px;
margin: 15px 0px 0px -10px;
overflow-y: scroll;
overflow-x: hidden;
&::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }
  p{
    margin-top: 80px;
    font-size: 22px;
    font-weight: 900;
    font-style: oblique;
    letter-spacing: 1px;
    opacity: 0.2;
  }

`


export const ProductInfoContainer = styled.div`
position: absolute;
bottom: 0;
width: 83%;
display: flex;
flex-direction: column;
padding: 10px 0px;
`



