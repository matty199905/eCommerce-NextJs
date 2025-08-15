import styled from "styled-components";

type BtnProps = {
    $contact?: boolean,
    $cart?: boolean,
    $enviado?: boolean,
    $checkout?: boolean,
    $register?: boolean,
    $login?: boolean,
}

export const BtnContainer = styled.button<BtnProps>`
display: flex;
justify-content: center;
align-items: center;
align-self: ${({$contact}) => ($contact === true ? 'last baseline' : 'center')};
width: ${({$cart}) => ($cart === true ? '100% ' : '180px')};
height: ${({$cart}) => ($cart === true ? '50px ' : '60px')};
background-color: 
${({$enviado, $contact, $cart}) => ($enviado === true ? '#00af00' : $contact || $cart === true ? 'darkblue' : 'orange')};  

margin-top: ${({$cart, $checkout}) => ($cart === true ? '20px ' : $checkout === true ? '25px' : '0px')};
margin-bottom: ${({$cart}) => ($cart === true ? '10px ' : '0px')};
border: none;
border-radius: ${({$cart}) => ($cart === true ? '5px' : '10px')};
color: white;
cursor: pointer;
transition: all ease .1s;
&:hover{
    opacity: .8;
    transition: all ease .3s;
}
&:active{
    background-color: transparent;
    color: ${({$register, $login}) => ($register || $login ? 'white' : 'black')};
    transform: scale(0.9);
    transition: all ease .1s;
}
&:disabled {
    background-color: grey;
    cursor: not-allowed;
}
@media (max-width: 1320px) {
    align-self: ${({$contact}) => ($contact === true ? 'center' : 'center')};
}
`