import { Form } from "formik";
import Link from "next/link";
import styled from "styled-components";



export const LoginWrapper = styled.div`
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
    margin-top: 120px;
    font-size: 40px;
    font-weight: 800;
    @media (max-width: 440px) {
    font-size: 30px}
}

span{font-size:17px;
font-weight: 400;
opacity: .8;
}
`

export const LoginFormContainer = styled(Form)`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
width: auto;
gap: 40px;
margin-top: 70px;
`

export const NoTengoCuenta = styled(Link)`
text-decoration: underline;
font-size: 15px;
margin-top: 40px;
color: white;
&:visited{
    color: #ff8f1f;
}
`