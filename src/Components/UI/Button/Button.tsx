import React from 'react'
import { ButtonStyled } from './ButtonStyled'



 type ButtonProps = {
  children: string,
  page?: boolean,
  productoDinamico?: boolean,
  disabled?: boolean,
  onClick?: () => void,
}




const Button: React.FC<ButtonProps> = ({children, page, productoDinamico, disabled,
  onClick = (e: React.MouseEvent<HTMLButtonElement>)=> e.preventDefault}) => {


  return (

 <ButtonStyled 
 
 $page={page}
 $productoDinamico={productoDinamico}
 disabled={disabled}
 onClick={onClick}
 >
    {children}
 </ButtonStyled>
  )
}

export default Button
