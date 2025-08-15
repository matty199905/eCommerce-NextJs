"use client";
import styled from "styled-components";


export const AboutUsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
height: auto;
padding-bottom: 50px;
`

export const AboutUsVideoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const AboutUsVideo = styled.video`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 100%;
object-fit: cover;
z-index: 0;
`

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
h1{
    font-size: 60px;
    font-style: oblique;
    font-weight: 500;
    letter-spacing: 2px;
    text-align: center;
    color:white;
    opacity: 0.9;
    margin-top: -100px;
    }
`

export const IconStyled = styled.div`
font-size: 50px;
    color:white;
    opacity: 0.9;
    margin-top: -20px;
    transition: all ease 0.3s;
  
`

export const DescriptionContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100vw;
height: auto;
`

export const Aside = styled.div`
display: flex;
justify-content: flex-start;
padding-left: 50px;
width: 30%;
margin-bottom: 80px;
span{
font-size:20px;
width: 100px;
font-style:oblique;
}
@media (max-width: 700px) {
    display: none;
}
`

export const SubtitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 70%;
padding-top: 30px;
h2{ margin: 50px 0px 0px ;
    font-size: 43px;
    font-weight: 400;
    font-style: oblique;
    letter-spacing: 2px;
    text-align: center;
    opacity: 0.9;
    border-bottom: 1px solid black;
    padding-bottom: 30px;
    margin-right: 30px;
    }
`

export const Subtitle = styled.p`
text-align: left;
font-size: 20px;
font-style:oblique;
font-weight: 300;
width: 94%;
`

export const ParagraphContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
gap: 50px;
width: 92%;
p{
    font-size:16px;
    font-style: oblique;
    font-weight: 500;
    width: 50%;
}
@media (max-width: 500px) {
flex-direction: column;
align-items: center;
gap: 0px;
p{
    width: 100%;
}
}
`

export const IconsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
width: 83vw;
margin-top: 120px;
padding-bottom: 60px;
@media (max-width: 1050px) {
transform: scale(0.9);
gap: 30px;
}
@media (max-width: 760px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 50px;
}

`

export const IconContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
h3{margin: 0px;
    }
    span {
    text-align: center;
    margin-top: 5px;
    opacity: 0.7;
}
`

type AboutIconProp = {
    $orange?: boolean
}

export const AboutIconStyled = styled.div<AboutIconProp>`
font-size: 50px;
color: ${({$orange}) => ($orange === true ? "orange" : "black")};
`
