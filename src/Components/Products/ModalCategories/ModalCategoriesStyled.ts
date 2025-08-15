'use client'
import { motion } from "framer-motion"
import styled from "styled-components"


export const FiltersContainer = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: flex-start;
flex-flow: row wrap;
gap: 60px;
width: auto;
height: auto;
max-height: 240px;
background: linear-gradient(to bottom, whitesmoke, rgb(209, 209, 209));
box-shadow: 1px 10px 10px grey;
padding: 20px 40px 40px 40px;
overflow-y: scroll;
z-index: 1;
@media (max-width: 550px) {
    justify-content: flex-start;
}
`


export const FilterContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
h3{
   font-weight:600 ;
   font-size: 17px;
   margin: 15px 0px 0 0px;
@media (max-width: 381px) {
    align-self: flex-start;
}
}
ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 7px;
    li{
        list-style: disc ;
        font-size: 16px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition: all ease .2s;

     
    }
}
@media (max-width:550px ){
flex-direction: column;
align-items: center;
}
`

type LiProps = {
  $activeFilter: boolean;
};

export const LiContainer = styled.div<LiProps>`
  color: ${({ $activeFilter }) => ($activeFilter ? 'orange' : 'black')};
  font-weight: ${({ $activeFilter }) => ($activeFilter ? '500' : '400')};
  transform: ${({ $activeFilter }) => ($activeFilter ? 'scale(1.05)' : 'scale(1)')};
  transition: all ease 0.2s;

  &:hover {
    color: orange;
    font-weight: 500;
    transform: ${({ $activeFilter }) => ($activeFilter ? 'scale(1.05)' : 'scale(1.15)')};
    transition: all ease 0.2s;
  }
`;


