import styled from "styled-components";


export type ButtonProps = {
    
    $page?: boolean,
    $productoDinamico?: boolean,   
  }

export const ButtonStyled = styled.button<ButtonProps>`
width: ${({$page, $productoDinamico})=>($page === true ? '80px' : $productoDinamico === true ? '100%' : '150px')};
height: ${({$page, $productoDinamico})=>($page === true ? '50px' : $productoDinamico === true ? '70px' : '40px')};
padding: 10px;
background-color: darkblue;
opacity: 0.7;
color: white;
border: none;
border-radius: ${({$page})=>($page ? '10%' : 'none')};
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
&:disabled {
    background-color: grey;
    cursor: not-allowed;
}
@media (max-width: 1020px) {
width: ${({$page})=>($page ? '80px' : '100%')}
}
`