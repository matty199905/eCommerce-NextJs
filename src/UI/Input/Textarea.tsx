import React from 'react'
import { ErrorMessageStyled, InputContainer, LabelStyled, TextTareaStyled } from './InputStyled'
import { ErrorMessage, Field } from 'formik'


type TextTareaProps = {
  htmlFor: string,
  name: string,
  placeholder: string,
  id: string,
  isError?: boolean,
  label:string , 
  asunto:boolean ,
}

const Textarea: React.FC<TextTareaProps> = ({htmlFor, name, placeholder, id, isError, label, asunto }) => {
  return (
    <InputContainer>
 
    <LabelStyled htmlFor={htmlFor}
    $asunto={asunto}>
   {label}
    </LabelStyled>
    
    <Field
    as={TextTareaStyled}
    name={name}
    placeholder={placeholder}
    id={id}
    error={isError}
    />
    
    <ErrorMessage name={name} component={ErrorMessageStyled}/>
    
    </InputContainer>
  )
}

export default Textarea
