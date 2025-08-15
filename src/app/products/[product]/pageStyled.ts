import styled from "styled-components";

export const ProductWrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
width: 100vw;
background-color: #292929; 
`

export const ProductCardContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 110px 0px;
width: 90%;
height: 80vh;
background: linear-gradient(to bottom,#c3c3c3 , #dadada, #efefef, white);
box-shadow: 1px 2px 20px black;
@media (max-width: 1060px) {
    flex-direction: column;
    align-items: flex-start;
    height: 1000px;

}
`

export const ProductImgContainer = styled.div`
width: 60%;
height: 100%;
margin: 0px;
background-size: cover;  
background-position: center;
@media (max-width: 1060px) {
    width: 100%;
background-position: top;
}
` 

export const ProductDetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 33%;
height: 88%;
padding: 30px 50px;
border-left: 2px solid #a3a3a3;
h1{
    font-size: 33px;
    font-weight: 600;
    margin-bottom: -10px;
}
h2{
    font-size:20px;
    font-weight: 400;
    opacity: .5;
}
@media (max-width: 1060px) {
    align-items: flex-start;
    align-self: center;
    border: none;
    padding: 40px 0px;
    width: 90%;
    }
    @media (max-width: 790px) {
   transform: scale(0.9);
   padding: 0px;
    }
`
export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Price = styled.div`
  font-size: 19px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
 margin: 30px 0 -30px 0;
  span{
    color: orange;
  }
`;

export const PriceOFF = styled(Price)`
.off{
    font-weight: 700;
    font-style: oblique;
    opacity: 1;
    color: black;
}
.cross{
    text-decoration: line-through 2.7px red;
    opacity: 0.5;
}
.orange{
    font-weight: 700;
    font-size: 20px;
    color: black;
    opacity: 1;

}
`

export const PricesOffContainer = styled.div`
display: flex;
flex-direction: column;
padding-left: 20px;
`

export const CuotasContainer = styled.div`
display: flex;
justify-content: flex-start;
align-self: flex-end;
margin: 80px 0 40px 0;
span{
    font-size: 18px;
    font-weight: 500;
    font-style: oblique;
    opacity: 0.5;
}
img{
    max-width: 80px;
   max-height: 25px;
    margin: 0px 0 0 25px;
}
`

