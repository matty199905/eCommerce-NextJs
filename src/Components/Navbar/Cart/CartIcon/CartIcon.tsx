import React from 'react'
import { Bubble, CartIconStyled } from './CartIconStyled'
import { PiShoppingCartLight } from 'react-icons/pi'
import { useDispatch } from 'react-redux'
import { showMenu } from '../../../../Redux/ToggleMenu/toggleMenuSlice'
import { showModalUser } from '../../../../Redux/User/userSlice'
import { CartProduct, showCartToggle } from '../../../../Redux/Cart/cartSlice'
import { useSelectorTS } from '../../../../Utils/constants'
import { show } from '../../../../Redux/Filters/filtersSlice'
import { AppDispatch } from '../../../../Redux/store'





const CartIcon: React.FC = () => {

  
  const { showFilters } = useSelectorTS(state => state.filters)

  const { cartProducts } = useSelectorTS(state => state.cart)

  const { showResponsiveMenu } = useSelectorTS(state => state.toggleMenu)

  const { modalUser } = useSelectorTS(state => state.user)

  const dispatch = useDispatch<AppDispatch>()

  const quantityBubble = (cartProducts || []).map((item: CartProduct) => item.quantity).reduce((acc, cur) => { return acc + cur }, 0)




  const closeToggleMenu_ModalUser = (): void => {
    if (modalUser) {
       dispatch(showModalUser())
    }
    else if (showResponsiveMenu) {
       dispatch(showMenu())
    }
    
  }


  
      const closeCategoryOnCart = (): void => {
          if (showFilters) {
               dispatch(show())
          }
  
      }

  return (

    <CartIconStyled onClick={(): void => { 
      dispatch(showCartToggle());
      closeToggleMenu_ModalUser();
      closeCategoryOnCart();
    }}
    >
      <Bubble><span>{quantityBubble}</span></Bubble>
      <PiShoppingCartLight />
    </CartIconStyled>

  )
}

export default CartIcon
