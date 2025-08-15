import React from 'react';
import { IniciaSesion, UserStyled } from './UserIconStyled';
import { CiUser } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { showModalUser } from '../../../../Redux/User/userSlice';
import { showMenu } from '../../../../Redux/ToggleMenu/toggleMenuSlice';
import { useSelectorTS } from '../../../../Utils/constants';
import { AppDispatch } from '../../../../Redux/store';




const UserIcon: React.FC = () => {


  const { currentUser } = useSelectorTS(state => state.user)

  const { showResponsiveMenu } = useSelectorTS(state => state.toggleMenu)

  const dispatch = useDispatch<AppDispatch>()

  const router = useRouter()

  const closeToggleMenuOnModalUser = (): void => {
    if (showResponsiveMenu) {
      dispatch(showMenu());
    }

  }




  return (

    <UserStyled onClick={(): void => {
      currentUser ?
        dispatch(showModalUser()) :
        router.push('/login');
      closeToggleMenuOnModalUser()
    }
    }>

      <CiUser />
      <IniciaSesion>{
        currentUser ?
          (currentUser?.nombre?.charAt(0).toUpperCase() + currentUser?.nombre?.slice(1)) :
          'Iniciar Sesión'
      }
      </IniciaSesion>

    </UserStyled>

  )
}

export default UserIcon

