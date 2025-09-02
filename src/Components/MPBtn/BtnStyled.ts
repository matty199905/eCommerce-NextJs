import styled from "styled-components";


export const BtnStyled = styled.button`
width: 200px;
height: 50px;
padding: 10px;
background-color: darkblue;
color: white;
border: none;
border-radius: 5px;
font-weight: 300;
font-size: 12px;
z-index: 0px;
cursor: pointer;
transition: all ease .3s;
&:hover{
    border-radius: 5px;
    transition: all ease .3s;
    transform: scale(.99);
    background-color: orange;
    opacity: 1;
}
`