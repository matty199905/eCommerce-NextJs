import { CategoriesSection, HeroContainer, HomeWrapper, ProductsLink, TitleContainer } from './pageStyled';
import CategoriesGrid from '@/Components/Home/CategoriesGrid/CategoriesGrid';



const Home = () => {


  return (

<HomeWrapper>



<HeroContainer style={{backgroundImage: `url(/img/Hero.png)`}}>  
 
<TitleContainer>
  <h1>Viví el Confort que Siempre Soñaste.</h1>
  <ProductsLink href='/products'><span>Nuestros Productos</span></ProductsLink>
</TitleContainer>

</HeroContainer>

<CategoriesSection>
<h2>El Confort que estás buscando.</h2>
<p>Descubrí el producto ideal para vos en nuestras colecciones especialmente diseñadas para que vivas una experiencia única.</p>

<CategoriesGrid/>

</CategoriesSection>
 
 

</HomeWrapper>

  )
}

export default Home
