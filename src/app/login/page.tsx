'use client';
import React from 'react';
import { LoginWrapper, NoTengoCuenta } from './pageStyled';
import { Formik } from 'formik';
import Input from '@/UI/Input/Input';
import { LoginFormContainer } from './pageStyled';
import Submit from '@/UI/Submit/Submit';
import { loginInitialValues } from '@/Formik/InitialValues';
import { loginValidationSchema } from '@/Formik/ValidationSchema';
import { loginUser } from '@/Axios/axiosUser';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '@/Redux/User/userSlice'
import Loader from '@/UI/Loader/Loader'
import { AppDispatch } from '@/Redux/store';


const Login: React.FC = () => {

  const router = useRouter()

  const dispatch = useDispatch<AppDispatch>()


  return (


    <LoginWrapper>
      <h1>Inicia Sesion.</h1>
      <span>Completa los datos para ingresar</span>


      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {

          const userLoged = await loginUser(values.email, values.password);

          console.log(userLoged);


          if (userLoged) {
            router.push('/');
            dispatch(setCurrentUser({ ...userLoged.usuario, token: userLoged.token }))
          }

        }}>


        {({ isSubmitting }) =>


          <LoginFormContainer>


            <Input
              name='email'
              id='email'
              htmlFor='email'
              placeholder='Ingrese su Email aqui...'
              label='Email'
              type='email'
              login={true} />

            <Input
              name='password'
              id='contraseña'
              htmlFor='contraseña'
              placeholder='Ingrese su Contraseña aqui...'
              label='Contraseña'
              type='password'
              login={true} />


            <Submit>{isSubmitting ? <Loader /> : 'Iniciar Sesión'}</Submit>


          </LoginFormContainer>
        }




      </Formik>

      <NoTengoCuenta href='/register'>No estas Registrado? Registrate Aquí.</NoTengoCuenta>


    </LoginWrapper>

  )
}

export default Login
