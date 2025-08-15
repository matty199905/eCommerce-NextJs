

import { Form } from "formik";
import Link  from "next/link";
import styled from "styled-components";

export const RegisterWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
background-color: #292929;
color: white;
width: 100vw;
height: auto;
padding-bottom: 90px;
h1{
    font-size: 40px;
    font-weight: 800;
    margin-top: 120px;
    @media (max-width: 1133px) {
     margin-top:120px}

@media (max-width: 440px) {
    font-size: 30px}
}
span{font-size:17px;
font-weight: 400;
opacity: .8;
}
`

export const FormContainer = styled(Form)`
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
align-items: center;
width: 60vw;
gap: 40px;
margin-top: 100px;

@media (max-width: 1133px) {
 flex-flow: column nowrap;
 margin-top: 60px;
}
`

export const YaEstoyRegistrado = styled(Link)`
text-decoration: underline;
font-size: 15px;
margin-top: 80px;
color: white;
&:visited{
    color: #ff8f1f;
}
@media (max-width: 1133px) {

}
`