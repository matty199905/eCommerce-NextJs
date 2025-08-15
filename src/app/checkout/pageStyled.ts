import styled from 'styled-components';

export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
width: 100vw;
height: auto;
padding-bottom: 70px;
background-color: #292929;
color: white;

@media (max-width: 867px) {
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
}
`