'use client'
import React from 'react'
import { ModalSpan, ModalUserContainer } from './ModalUserStyled'
import { useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { logout, showModalUser } from '../../../../Redux/User/userSlice'
import { useRouter } from 'next/navigation'
import { useSelectorTS } from '../../../../Utils/constants'
import { AppDispatch } from '../../../../Redux/store'



const ModalUser: React.FC = () => {

  const { modalUser } = useSelectorTS(state => state.user)

  const dispatch = useDispatch<AppDispatch>()

  const router = useRouter()

  return (
    <AnimatePresence>


      {modalUser &&


        <ModalUserContainer
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ type: 'spring', damping: 25 }}
          key='user-modal'
        >

          <ModalSpan onClick={(): void => {router.push('/orders'); dispatch(showModalUser())}}>
            Mis Ordenes
          </ModalSpan>
<hr />

          <ModalSpan onClick={(): void => {
            dispatch(logout());
            dispatch(showModalUser());
            router.push('/')
          }}>Cerrar Sesión</ModalSpan>





        </ModalUserContainer>



      }
    </AnimatePresence>

  )
}

export default ModalUser
