import React from 'react';
import { AboutUsVideoContainer, AboutUsVideo, AboutUsWrapper, IconStyled, TitleContainer, SubtitleContainer, Subtitle, Aside, DescriptionContainer, ParagraphContainer, IconsContainer, IconContainer, AboutIconStyled } from './pageStyled';
import { FaArrowDown } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaShippingFast } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";




const AboutUs: React.FC = () => {

    return (

        <AboutUsWrapper>


            <AboutUsVideoContainer>
                <AboutUsVideo src={'/img/video-about-us.mp4'} autoPlay loop muted />

                <TitleContainer>
                    <h1>Sobre Nosotros</h1>
                    <IconStyled>
                        <FaArrowDown />
                    </IconStyled>

                </TitleContainer>
                <FaArrowDown />
            </AboutUsVideoContainer>



            <DescriptionContainer>

                <Aside><span>Sobre Nosotros</span></Aside>

                <SubtitleContainer>

                    <h2>Expertos en Confort</h2>
                    <Subtitle>Cumplimos más de 60 años dedicados a crear experiencias de confort verdaderamente únicas, con la misión de acompañarte en los mejores momentos de tu vida.</Subtitle>

                    <ParagraphContainer>
                        <p>Desde 1960, Böttchers se ha convertido en un referente indiscutido a la hora de buscar diseño, calidad y confort. Durante más de 60 años nos hemos dedicado exclusivamente a fabricar y distribuir productos con la última tecnología, que brinden el máximo confort en movimiento.</p>
                        <p>
                            Contamos con una tienda de más de 3300 m², un espacio con la más amplia variedad de productos creados para el confort. La elección personalizada de la tapicería hace de cada producto una pieza única.</p>
                    </ParagraphContainer>

                </SubtitleContainer>


            </DescriptionContainer>


            <IconsContainer>

                <IconContainer>
                    <AboutIconStyled>
                        <FaShippingFast />
                    </AboutIconStyled>
                    <h3>Envio a todo el país.</h3>
                    <span>A todo el país en tiempo record.</span>
                </IconContainer>


                <AboutIconStyled $orange={true}>
                    <IoIosArrowRoundForward
                    />
                </AboutIconStyled>


                <IconContainer>
                    <AboutIconStyled>
                        <LiaShippingFastSolid />
                    </AboutIconStyled>
                    <h3>Entrega Inmediata.</h3>
                    <span>Disponibilidad de Stock permanente.</span>
                </IconContainer>


                <AboutIconStyled $orange={true}>
                    <IoIosArrowRoundForward
                    />
                </AboutIconStyled>


                <IconContainer>
                    <AboutIconStyled>
                        <FaPhoneAlt />
                    </AboutIconStyled>
                    <h3>Venta Telefónica.</h3>
                    <span>Tel. 11 3204-6562 Lun a Sab de 10 a 20hs.</span>
                    <span>Feriados de 11 a 20hs.</span>
                </IconContainer>

            </IconsContainer>

        </AboutUsWrapper>

    )
}

export default AboutUs
