import styled from "styled-components";

export const CartIconStyled = styled.div`
position: relative;
font-size: 35px;
color: white;
&:hover{
    cursor: pointer;
    transition: all ease 0.5s;
    color: #ff7b00;
}
@media (max-width: 470px) {
font-size: 30px;
}
`


export const Bubble = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
right: -8px;
top: -10px;
width: 22px;
height: 22px;
border-radius: 50%;
background-color: orange;
span{
    color: white;
    font-size: 15px;
    text-align: center;
}
`