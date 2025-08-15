import styled from "styled-components";

export const ProductosContainerStyled = styled.div`
  width: 40%;
  margin-top: 110px;
  margin-right: 80px;
  
  @media (max-width: 867px) {
width: 90vw;
margin-right: 0px;
}
`;

export const ProductsTitleStyled = styled.h2`
  font-size: 22px;
  margin: 20px 0px 20px 0px;
  padding-left: 40px;
  @media (max-width: 867px) {
text-align: center;
font-size: 25px;
margin-left: -30px;
}
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 80%;
  padding: 20px;
  height: 240px;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }
  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubtotalStyled = styled.div`
  font-size: 17px;
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
