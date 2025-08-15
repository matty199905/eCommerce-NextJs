'use client';
import React, { useEffect, useState } from 'react';
import { IconsContainer, LinksContainer, Logo, NavbarContainer, NavLinkStyled, ScrollLink, ToggleMenuIcon } from './NavbarStyled';
import Link from 'next/link';
import { LuMenu } from "react-icons/lu";
import UserIcon from './User/UserIcon/UserIcon';
import CartIcon from './Cart/CartIcon/CartIcon';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/store';
import { showMenu } from '../../Redux/ToggleMenu/toggleMenuSlice';
import { showModalUser } from '../../Redux/User/userSlice';
import { useSelectorTS } from '../../Utils/constants';







const Navbar: React.FC = () => {


    const [changeColor, setchangeColor] = useState<string>("transparent");

    const dispatch = useDispatch<AppDispatch>();

    const { modalUser } = useSelectorTS(state => state.user);


    const changeColorOnScroll = (): void => {

        if (window.scrollY >= 0.5) {
            setchangeColor('#292929')
        }
        else { setchangeColor('transparent') }
    };




    useEffect(() => {
        window.addEventListener('scroll', changeColorOnScroll);
        return () => window.removeEventListener('scroll', changeColorOnScroll);
    }, []);




    const closeModalUserOnToggleMenu = () => {
        if (modalUser) {
            return dispatch(showModalUser());
        }

    };




    return (

        <NavbarContainer
            style={{ backgroundColor: changeColor, transition: 'all ease 0.4s' }}
        >



            <Link href='/'>
                <Logo>Böttchers.</Logo>
            </Link>




            <LinksContainer>
                <NavLinkStyled href='/products'>Productos</NavLinkStyled>
                <NavLinkStyled href='/aboutus'>Sobre Nosotros</NavLinkStyled>
                <NavLinkStyled href='/contact'>Contactanos</NavLinkStyled>
                <ScrollLink onClick={(): void => window.scrollTo(0, 10000)}>Mas Info</ScrollLink>
            </LinksContainer>



            <IconsContainer>


                <CartIcon />

                <UserIcon />

                <ToggleMenuIcon onClick={(): void => {
                    dispatch(showMenu());
                    closeModalUserOnToggleMenu();
                    window.scrollBy(0, 1)
                }}>
                    <LuMenu />
                </ToggleMenuIcon>

            </IconsContainer>


        </NavbarContainer>

    )
}

export default Navbar
