'use client';
import React from 'react';
import { FormContainer, RegisterWrapper, YaEstoyRegistrado } from './pageStyled';
import { Formik } from 'formik';
import Input from '@/UI/Input/Input';
import { registerInitialValues } from '@/Formik/InitialValues';
import Submit from '@/UI/Submit/Submit';
import { registerValidationSchema } from '@/Formik/ValidationSchema';
import { createUser } from '@/Axios/axiosUser';
import { useRouter } from 'next/navigation';
import Loader from '@/UI/Loader/Loader';




const Register: React.FC = () => {

  const router = useRouter()

  return (

    <RegisterWrapper>
      <h1>Registrate ahora.</h1>
      <span>Completa los datos para registrarte</span>


      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, { resetForm }) => {

          try {
            const user = await createUser(values.name, values.email, values.password);
            if (user) {
            router.push('/login');
            resetForm();}
          } catch (error) {
            console.error('Error registrando usuario', error);
            alert('Hubo un error al registrarte');
          }

        }}>

        {({ isSubmitting }) =>

          <FormContainer>

            <Input
              name='name'
              id='nombre'
              htmlFor='nombre'
              placeholder='Ingrese su Nombre aqui...'
              label='Nombre'
              type='text'
              register={true} />


            <Input
              name='email'
              id='email'
              htmlFor='email'
              placeholder='Ingrese su Email aqui...'
              label='Email'
              type='email'
              register={true} />

            <Input
              name='password'
              id='contraseña'
              htmlFor='contraseña'
              placeholder='Ingrese su Contraseña aqui...'
              label='Contraseña'
              type='password'
              register={true}
              onCopy={(e) => e.preventDefault()}
            />


            <Input
              name='password2'
              id='contraseña2'
              htmlFor='contraseña2'
              placeholder='Ingrese su Contraseña aqui...'
              label='Repita su Contraseña'
              type='password'
              register={true}
              onCopy={(e) => e.preventDefault()}
            />


            <Submit register={true}>
              {isSubmitting ? <Loader/> : 'Enviar'}
            </Submit>


          </FormContainer>

        }

      </Formik>

      <YaEstoyRegistrado href='/login'>Ya estas Registrado? Inicia Sesion Aquí.</YaEstoyRegistrado>


    </RegisterWrapper>

  )
}

export default Register
