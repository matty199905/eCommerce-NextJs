"use client"
import styled from 'styled-components';


export const OverwiewWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding: 120px 0 50px 0px;
width: 100vw;
min-height: 90vh;
height: auto;
background-color: #292929;
h1{
    color: white;
    font-size: 25px;
    margin-left:50px;
    @media (max-width: 420px) {
      text-align: center;
      padding: 0 20px;
}


} 
@media (max-width: 850px) {
  align-items: center;
  padding-top: 100px;

  h1{
  margin-left: 0;
  }
}
`


export const CardsContainer = styled.div`
  display: flex;
 flex-flow: row wrap;
  align-items: center;
  justify-content:flex-start;
  gap: 25px;
  width: 80%;
  margin: 30px 0 0 0;
  margin-left:50px;
  @media (max-width: 850px) {
  justify-content: center;
  margin-left: 0;
}
`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 90px 0 0 0;
  width: 500px;
  margin-left:50px;
  @media (max-width: 850px) {
width: 80vw;
margin: 70px auto;
}
`;

export const SubtotalStyled = styled.div`
color: white;
  font-size: 16px;
  font-weight: 400;
  font-style: oblique;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -10px;
  span{
    font-style: normal;
  }
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: #ff7a00;
  font-weight: 800;
  font-size: 1.3rem;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
`;