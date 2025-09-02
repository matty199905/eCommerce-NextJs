import React from 'react'
import { BtnContainer } from './SubmitStyled'


type SubmitProps = {
  children?: string | React.ReactNode,
  register?: boolean, 
  login?: boolean, 
  contact?: boolean, 
  cart?: boolean, 
  onClick?: () => void, 
  disabled?: boolean, 
  checkout?: boolean,
}


const Submit: React.FC<SubmitProps> = ({children, register, login, contact, cart, onClick, disabled, checkout}) => {
  return (
 <BtnContainer 
 type='submit'
 $register={register}
 $login={login}
 $contact={contact}
 $cart={cart}
 onClick={onClick}
 disabled={disabled}
 $checkout={checkout}>

 {children}

 </BtnContainer>
  )
}

export default Submit
