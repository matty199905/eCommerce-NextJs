'use client';
import React, { useRef } from 'react';
import { Formik } from 'formik';
import { contactInitialValues } from '../../Formik/InitialValues';
import { contactValidationSchema } from '../../Formik/ValidationSchema';
import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';
import Textarea from '../../UI/Input/Textarea';
import { FormContainer, FormikContainer } from './contactFormStyled';
import emailjs from '@emailjs/browser';
import Loader from '@/UI/Loader/Loader';


const ContactForm = () => {


  const sendEmailAction = async (formElement: HTMLFormElement) => {
    emailjs
      .sendForm('service_4nr7uhx', 'contact_form', formElement, {
        publicKey: process.env.NEXT_PUBLIC__EMAILJS_PUBLIC_KEY
      })
      .then(
        () => {
          alert('Mensaje enviado correctamente!');
        },
        (error) => {
          console.error('Error al enviar mensaje:', error);
        }
      );
  };



  const form = useRef<HTMLFormElement>(null);




  return (
    <FormikContainer>


      <h2>Formulario de Contacto</h2>

      <Formik
        initialValues={contactInitialValues}
        validationSchema={contactValidationSchema}
        onSubmit={(value, { resetForm }) => {
          if (form.current) {
            sendEmailAction(form.current);
            resetForm();
          }
        }
        }>

        {

          ({ isSubmitting }) =>


            <FormContainer ref={form}>

              <Input
                name="user_name"
                id="nombre"
                htmlFor="nombre"
                type="text"
                placeholder="Ingrese su nombre..."
                label="Nombre"
                contact={true} />


              <Input
                name="user_email"
                id="email"
                htmlFor="email"
                type="email"
                placeholder="Ingrese su Email..."
                label="Email"
                contact={true} />

              <Textarea
                name="message"
                id="message"
                htmlFor="message"
                placeholder="Ingrese su asunto..."
                label="Mensaje"
                asunto={true} />


              <Submit
                contact={true}
              >{isSubmitting ? <Loader/> : 'Enviar'}</Submit>

            </FormContainer>
        }



      </Formik>


    </FormikContainer>
  )
}

export default ContactForm
