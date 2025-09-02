import React from 'react'
import { ErrorMessageStyled, InputContainer, InputStyled, LabelStyled } from './InputStyled'
import { ErrorMessage, Field } from 'formik'


type InputProps = {
  name: string,
  id: string,
  type: string,
  htmlFor: string,
  placeholder?: string,
  label?: string,
  accept?:string,
  checkout?: boolean,
  asunto?: boolean,
  isError?: boolean,
  register?: boolean,
  contact?: boolean,
  login?: boolean,
  setImage?: boolean,
  onCopy?: React.MouseEventHandler,
}




const Input: React.FC<InputProps> = ({
  setImage,
  asunto,
  htmlFor,
  type,
  name,
  placeholder,
  id,
  isError,
  label,
  register,
  contact,
  login,
  checkout,
  onCopy,
}) => {
  return (
    <InputContainer>
      <LabelStyled htmlFor={htmlFor} $asunto={asunto}>
        {label}
      </LabelStyled>

        <Field
          name={name}
          as={InputStyled}
          type={type}
          placeholder={placeholder}
          id={id}
          onCopy={onCopy}
          error={isError}
          $asunto={asunto}
          $register={register}
          $login={login}
          $checkout={checkout}
          $contact={contact}
          $setImage={setImage}
        />

      <ErrorMessage name={name} component={ErrorMessageStyled} />
    </InputContainer>
  );
};

export default Input