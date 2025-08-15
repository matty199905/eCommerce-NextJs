import {styled} from 'styled-components';
import { Form } from "formik";

export const FormikContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 80px;
margin-top: 40px;
h2{
    margin: 50px 0px 0px ;
    font-size: 46px;
    font-weight: 400;
    font-style: oblique;
    letter-spacing: 2px;
    opacity: 0.9;
    border-bottom: 1px solid white;
    padding-bottom: 30px;
    @media (max-width: 1090px) {
font-size: 40px;
padding: 0 20px;
text-align: center;
}
}
`

export const FormContainer = styled(Form)`
display: flex;
justify-content: center;
align-items:center;
flex-flow: row wrap;
gap: 20px;
width: 80vw;
height: auto;
padding-bottom: 60px;
@media (max-width: 1320px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    margin-top: -30px;
}
`