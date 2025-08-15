import {styled} from 'styled-components';

export const ContactWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
height: auto;
padding-bottom: 50px;
`


export const ContactImg = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`

export const ContactTitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
h1{
    font-size: 60px;
    font-style: oblique;
    font-weight: 500;
    letter-spacing: 2px;
    color:white;
    opacity: 0.9;
    margin-top: -100px;}
`

export const ContactIconStyled = styled.div`
font-size: 50px;
    color:white;
    opacity: 0.9;
    margin-top: -20px;
    transition: all ease 0.3s;   
`

