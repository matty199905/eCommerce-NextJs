'use client'
import Link from "next/link";
import styled from "styled-components";


export const HomeWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 90px;
height: auto;
width: 100vw;
padding-bottom: 60px;
`

export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
    background-size: cover;
    background-position:center;
    background-attachment: fixed;
    height:100vh;
    width: 100vw;
    margin-bottom: -50px;
    @media (max-width: 750px) {
    margin-bottom: -30px;
     background-attachment: scroll;
}
`


export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 80px 0px 0px 0px;
width: 590px;
padding: 0px 0px;
h1{
    font-size: 55px;
    font-weight: 400;
    letter-spacing: 2px;
    text-align: center;
    background: linear-gradient(to left, #ffffff, #adadad);
    color: transparent;
    background-clip: text;
    @media (max-width: 580px) {
        font-size: 45px;
        padding: 0 20px;
    }
}
`

export const ProductsLink = styled(Link)`
   background-color: white;
   width: 200px;
   opacity: 0.8;
   padding: 10px 0px;
   border: none;
   border-radius: 2px;
   font-size: 16px;
   font-style: oblique;
   text-align: center;
    cursor: pointer;
    transition: all ease .3s;
    &:hover{
        opacity: 1;
        background-color: orange;
        transition: all ease .3s;
        z-index: 0;}
        span{ color: black;
            transition: all ease .1s;
        &:hover{ color: white;
            transition: all ease .1s;}}

`


export const CategoriesSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
h2{
    color: black;
    font-size: 49px;
    font-weight: 500;
    margin-bottom: 0px;
    text-align: center;
    @media (max-width: 750px) {
    font-size: 40px;
    margin-top: 10px;
    padding: 0 20px;
}
    @media (max-width: 400px) {
    font-size: 29px;
    margin-top: -15px;

}
}
p{
    width: 50vw;
    font-size: 16px;
    font-weight: 400;
    opacity: 0.6;
    line-height: 28px;
    text-align: center;
    @media (max-width: 500px) {
    font-size: 16px;
    width: 80vw;
}
}

`
