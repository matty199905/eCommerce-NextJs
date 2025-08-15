"use client"
import React from 'react'
import { ContainerCheckoutStyled } from './pageStyled'
import CheckoutForm from '@/Components/Checkout/Form/CheckoutForm'
import ProductsCheckout from '@/Components/Checkout/Products/ProductsCheckout'
import { useSelectorTS } from '@/Utils/constants'
import { useRouter } from 'next/navigation'


const Checkout: React.FC = () => {
  const router = useRouter();
  const { user } = useSelectorTS(state => state);

  React.useEffect(() => {
    if (!user.currentUser) {
      router.push('/login');
    }
  }, [user.currentUser, router]);

  return (
    <ContainerCheckoutStyled>
      <CheckoutForm/>
      <ProductsCheckout/>
    </ContainerCheckoutStyled>
  )
}

export default Checkout
