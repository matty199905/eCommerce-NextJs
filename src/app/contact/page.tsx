'use client';
import React from 'react';
import { ContactIconStyled, ContactImg, ContactTitleContainer, ContactWrapper } from './pageStyled';
import { FaArrowDown } from "react-icons/fa";
import ContactForm from '@/Components/ContactForm/ContactForm';




const Contact: React.FC = () => {


  return (
    <ContactWrapper>

      <ContactImg style={{ backgroundImage: `url(/img/contact-img.jpg)` }}>

        <ContactTitleContainer>

          <h1>Contactanos</h1>
          <ContactIconStyled>
            <FaArrowDown />
          </ContactIconStyled>

        </ContactTitleContainer>

      </ContactImg>

      <ContactForm />

    </ContactWrapper >
  )
}

export default Contact