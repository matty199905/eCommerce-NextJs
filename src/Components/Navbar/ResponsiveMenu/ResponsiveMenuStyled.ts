'use client'
import styled from "styled-components";
import {motion} from 'framer-motion'

export const ResponsiveMenuContainer = styled(motion.div)`
display: none;
@media (max-width: 820px) {
    position: fixed;
    top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
 width: 100vw;
 height: 350px;
 background:  linear-gradient(rgba(23, 23, 23, 0.274), rgba(26, 26, 26, 0.301));
backdrop-filter: blur(30px);
z-index: 400;
}
`

export const Separator = styled.hr`
width: 100%;
border: 0.5px solid #ffffff94;
margin: 0px;
`