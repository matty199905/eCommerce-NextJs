import styled from "styled-components"

export const ProductCardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 280px;
height: 330px;
background: linear-gradient(to bottom,#c3c3c3 , #dadada, #efefef) ;
box-shadow: 1px 2px 10px grey;
img{
    width: 99%;
    margin: auto;
    height: 70%;
}
@media (max-width: 720px) {
    flex-direction: row;
width: 90vw;
height: 100px;
img{
    width: 30%;
    height: 100%;
}
}
@media (max-width: 420px) {
    margin: 0 20px;
    height: auto;
    flex-direction: column;
    flex-wrap: wrap;
    img {
        width: 100%;
    }
}

`

export const TitlePriceContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;

`

export const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
padding:0px  10px;
h2{
    font-weight:500 ;
   font-size: 17px;
   @media (max-width: 720px) {
margin-top: 20px;
}
}
span{
    font-weight:300 ;
   font-size: 17px;
   margin-top: -5px;
   opacity: .8;
   margin-bottom: 10px;
   @media (max-width: 1230px) {
font-size: 16px;
}
}
`

export const Price = styled.div`
   font-weight: 400;
   font-size: 17px;
align-self: flex-end;
margin: 10px;
`

