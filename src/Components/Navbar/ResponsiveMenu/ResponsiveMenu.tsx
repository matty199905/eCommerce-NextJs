'use client'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { ResponsiveMenuContainer, Separator } from './ResponsiveMenuStyled'
import { showMenu } from '../../../Redux/ToggleMenu/toggleMenuSlice'
import { NavLinkStyled, ScrollLink } from '../NavbarStyled'
import { useSelectorTS } from '../../../Utils/constants'
import { AppDispatch } from '../../../Redux/store'


const ResponsiveMenu: React.FC = () => {

const {showResponsiveMenu} = useSelectorTS(state => state.toggleMenu)

const dispatch = useDispatch<AppDispatch>()



  return (

    <AnimatePresence>

        { showResponsiveMenu &&

  <ResponsiveMenuContainer
  initial={{translateY: -600}}
  animate={{translateY: 0}}
  exit={{translateY: -600}}
  transition={{ type:'spring',  damping: 25 }}
  key='toggleMenu'>




                    <NavLinkStyled href='/products' onClick={(): void =>{dispatch(showMenu())}}>Productos</NavLinkStyled>
                    <Separator/>
                    <NavLinkStyled href='/aboutus' onClick={(): void =>{dispatch(showMenu())}}>Sobre Nosotros</NavLinkStyled>
                    <Separator/>
                    <NavLinkStyled href='/contact' onClick={(): void =>{dispatch(showMenu())}}>Contactanos</NavLinkStyled>
                    <Separator/>
                    <ScrollLink onClick={(): void  => {window.scrollTo(0, 10000); dispatch(showMenu())}}>Mas Info</ScrollLink>

  </ResponsiveMenuContainer> 
  }

  </AnimatePresence>
  )
}

export default ResponsiveMenu
