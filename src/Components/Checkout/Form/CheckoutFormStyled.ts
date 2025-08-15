import { Form, Formik } from 'formik';
import styled from 'styled-components';


export const CheckoutContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 20px;
  width: 35%;
  margin: 110px 0px 0px 100px;
  padding: 0;
  h2{
    margin-bottom: 30px;
  }
  @media (max-width: 867px) {
    margin-left: 0px;
    width: 80vw;
  

  }
`;

export const FormikContainer = styled(Formik)`
  display: flex;
  flex-direction: column;

`



export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

`;