'use client'
import styled from "styled-components"

export const ImgContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 100 ;
  
`

export const ProductsTitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 400px;
margin: 150px 30px;
color: white;
h1{
    font-size: 23px;
    font-weight: 800;
    letter-spacing: 1px;

}
span{
    width: 80%;
    margin-top: 30px;
    text-align: center;
    font-size: 17px;
    font-weight: 500;

}
`

export const DoceCuotasSinInteresContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
width: 330px;
height: 120px;
gap: 20px;
@media (max-width: 400px) {
    transform: scale(0.9);
}
@media (max-width: 330px) {
    width: 300px;
}
`

export const NumeroCuotas = styled.div`
font-size: 130px;
font-weight: 500;
transform: scale(1.1, 1.2);
`

export const CuotasSinInteresContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: left;
font-size: 27px;
font-weight: 400;
font-style: oblique;
gap: 10px;
img{
    width: 100px;
    align-self: flex-start;
}
`