import * as Yup from 'yup'
import { regEmail } from '../Utils/regExp'


export type ContactFormValues = Yup.InferType<typeof contactValidationSchema>;

export type RegisterFormValues = Yup.InferType<typeof registerValidationSchema>;

export type LoginFormValues = Yup.InferType<typeof loginValidationSchema>;

export type CheckoutFormValues = Yup.InferType<typeof checkoutValidationSchema>;



export const contactValidationSchema = Yup.object({
    user_name: Yup
        .string()
        .required('Campo Requerido'),

    user_email: Yup
        .string()
        .required('Campo Requerido')
        .matches(regEmail, 'Mail no válido'),

    message: Yup
        .string()
        .required('Campo Requerido')
        .max(200, 'Máximo 200 caracteres')
        .min(20, 'Mínimo 20 caracteres'),
})



export const registerValidationSchema = Yup.object({
    name: Yup
        .string()
        .required('Campo Requerido')
        .max(10, 'Máximo 10 caracteres'),


    email: Yup
        .string()
        .required('Campo Requerido')
        .matches(regEmail, 'Mail no válido'),

    password: Yup
        .string()
        .required('Campo Requerido')
        .max(12, 'Maximo 12 caracteres')
        .min(6, 'Mínimo 6 caracteres'),

    password2: Yup
        .string()
        .required('Campo Requerido')
        .oneOf([Yup.ref('password')], 'La contraseña no coincide')
        .max(12, 'Maximo 12 caracteres')
        .min(6, 'Mínimo 6 caracteres'),
})


export const loginValidationSchema = Yup.object({

    email: Yup
        .string()
        .required('Campo Requerido')
        .matches(regEmail, 'Mail no válido'),

    password: Yup
        .string()
        .required('Campo Requerido')
        .max(12, 'Maximo 12 caracteres')
        .min(6, 'Mínimo 6 caracteres')
})

export const checkoutValidationSchema = Yup.object({
    name: Yup
        .string()
        .required('Campo Requerido'),

    cellphone: Yup
        .number()
        .required('Campo Requerido'),

    location: Yup
        .string()
        .required('Campo Requerido'),

    address: Yup
        .string()
        .required('Campo Requerido')
})