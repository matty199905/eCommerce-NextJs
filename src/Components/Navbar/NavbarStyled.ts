
import styled from "styled-components";
import Link from "next/link";


export const NavbarContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: flex-end;
position: fixed;
top: 0;
padding-bottom: 10px;
width: 100vw;
height: 70px;
z-index: 500;

`

export const Logo = styled.button`
color: white;
font-size: 35px;
font-weight: 800;
background-color: transparent;
border: none;
margin-left: 30px;
 transition: all ease 0.3s;
&:hover{
    cursor: pointer;
    color: #ff7b00;
     transition: all ease 0.3s;
}
@media (max-width: 470px) {
font-size: 27px;
margin-left: 10px;
}

`

export const LinksContainer = styled.ul`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
gap: 30px;
margin: 0px 30px 0 0;
@media (max-width: 820px) {
    display: none;
}
`

export const NavLinkStyled = styled(Link)`
background-color: transparent;
color: red;
text-decoration: none;
font-size: 17px;
font-weight:300;
transition: all ease .3s;
color: white;
&:hover{
    cursor: pointer;
    transition: all ease 0.3s;
    color: #ff7b00;
   
}
@media (max-width: 820px) {
margin-left: 40px;
font-size: 18px;
}
`

export const ScrollLink = styled.button`
background-color: transparent;
color: red;
text-decoration: none;
font-family:'Lato';
font-size: 17px;
font-weight:300;
border: none;
transition: all ease .3s;
color: white;
&:hover{
    cursor: pointer;
    transition: all ease 0.3s;
    color: #ff7b00;
   
}
@media (max-width: 820px) {
margin-left: 40px;
font-size: 18px;
}

`

export const IconsContainer = styled.div`
margin-right: 30px;
display: flex;
justify-content: center;
align-items: baseline;
gap: 20px;
@media (max-width: 470px) {
margin-right: 10px;
gap: 7px;
font-size: 10px;
}
`
export const ToggleMenuIcon = styled.div`
display: none;
@media (max-width: 820px) {
    display: flex;
    font-size: 33px;
    color: white;
    margin-left: 0;
}
@media (max-width: 470px) {
font-size: 30px;
}
`




