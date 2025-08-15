import { ReactNode } from 'react';
import ReduxProvider from './providers';
import GlobalStyles from '@/Styles/GlobalStyles';
import Navbar from '@/Components/Navbar/Navbar';
import ResponsiveMenu from '@/Components/Navbar/ResponsiveMenu/ResponsiveMenu';
import ModalUser from '@/Components/Navbar/User/UserIcon/ModalUser';
import ModalCart from '@/Components/Navbar/Cart/ModalCart/ModalCart';
import Footer from '@/Components/Footer/Footer';
import { Lato } from 'next/font/google';

export const metadata = {
  title: 'Bottchers',
  description: 'Tienda online de muebles y decoración',
  keywords: ['ecommerce', 'muebles', 'decoración', 'tienda', 'sillones', 'mesas'],
}

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"]
})


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={lato.className}>
        <ReduxProvider>
          <GlobalStyles />
          <Navbar />
          <ModalCart />
          <ResponsiveMenu />
          <ModalUser />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}