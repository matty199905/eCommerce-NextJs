'use client'
import React from 'react'
import { FooterColumn, FooterWrapper, ColumnsContainer, LinkStyled, SiguenosContainer, IconsContainer, IconStyled } from './FooterStyled'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";



const Footer: React.FC = () => {



    return (
        <FooterWrapper>


                <ColumnsContainer>


                    <FooterColumn>
                        <h3>Sobre Nosotros</h3>

                        <ul>

                            <LinkStyled href='/not-found'>Hechos</LinkStyled>
                            <LinkStyled href='/not-found'>Sostenibilidad</LinkStyled>
                            <LinkStyled href='/not-found'>Prensa</LinkStyled>

                        </ul>
                    </FooterColumn>

                    <FooterColumn>
                        <h3>Contacto</h3>

                        <ul>

                            <LinkStyled href="/contacto">Contacto</LinkStyled>
                            <LinkStyled href='/not-found'>Encuentranos</LinkStyled>
                            <LinkStyled href='/not-found'>Mas Info</LinkStyled>

                        </ul>
                    </FooterColumn>


                    <FooterColumn>
                        <h3>Legal</h3>

                        <ul>

                            <LinkStyled href='/not-found'>Derechos de Distribución</LinkStyled>
                            <LinkStyled href='/not-found'>Protrección de Datos</LinkStyled>
                            <LinkStyled href='/not-found'>Pie de Imprenta</LinkStyled>

                        </ul>
                    </FooterColumn>


                </ColumnsContainer>

                <SiguenosContainer>

                    <span>SEGUINOS</span>

                    <p>Enterate de las últimas novedades en las redes que más te gusten.</p>


                    <IconsContainer>

                        <IconStyled>
                            <LinkStyled href='https://www.facebook.com/' target='_blank' icon={'true'}><FaFacebookF /></LinkStyled>
                        </IconStyled>

                        <IconStyled>
                            <LinkStyled href='https://www.instagram.com/' target='_blank' icon={'true'}><IoLogoInstagram /></LinkStyled>
                        </IconStyled>

                        <IconStyled>
                            <LinkStyled href='https://x.com/?lang=es' target='_blank' icon={'true'}><BsTwitterX /></LinkStyled>
                        </IconStyled>

                        <IconStyled>
                            <LinkStyled href='https://www.youtube.com/' target='_blank' icon={'true'}> <ImYoutube2 /></LinkStyled>
                        </IconStyled>

                 

                    </IconsContainer>


                </SiguenosContainer>

 

        </FooterWrapper>
    )
}

export default Footer
