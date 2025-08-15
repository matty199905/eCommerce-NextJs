import styled from "styled-components";


type LabelProps = {
    $asunto?: boolean
}

type InputProps = {
    $contact?: boolean,
    $register?: boolean,
    $login?: boolean,
    $checkout?: boolean,
}


export const InputContainer = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
gap: 10px;
`

export const LabelStyled = styled.label<LabelProps>`
font-size: 20px;
font-weight: 400;
font-style: oblique;
margin-left: 0px;
margin-top: ${({$asunto}) => ($asunto === true ? '40px' : '0px')};
`

export const InputStyled = styled.input<InputProps>`
position: relative;
width: ${({$contact}) => ($contact === true ? '500px' : '270px')};
height: 20px;
padding: 10px;
border: none;
border-bottom: ${({$register, $login, $checkout}) => ($register || $login || $checkout === true ? '1px solid #c3c3c3' : '1px solid black')}; 
background-color: transparent;
margin-bottom: ${({$contact}) => ($contact === true ? '50px' : '')};
color: ${({$register, $login, $checkout}) => ($register || $login || $checkout ? 'white' : 'black')};
&::placeholder{
    color: grey;
    position: absolute;
    top: 13px;
    font-family: system-ui;
}
@media (max-width: 1090px) {
 max-width: ${({$contact}) => ($contact === true ? '300px' : undefined)};
}
@media (max-width: 380px) {
 width: ${({$contact}) => ($contact === true ? '250px' : undefined)};
}
`

export const TextTareaStyled = styled.textarea`
width: 500px;
height: 140px;
padding: 15px;
resize: none;
border: none;
border-bottom: 1px solid black;
background-color: transparent;
color: black;
font-family: system-ui;
&::placeholder{
    color: grey;
    position: absolute;
    top: 13px;
    font-family: system-ui;
}
@media (max-width: 1090px) {
 height: 100px;
 max-width: 300px;
}
@media (max-width: 380px) {
 width: 250px;
}
`


export const ErrorMessageStyled = styled.span`
  margin-top: 5px;
  color: red;
  font-size: 12px;`