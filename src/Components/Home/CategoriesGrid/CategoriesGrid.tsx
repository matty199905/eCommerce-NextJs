import React from 'react'
import { CamasMultiposicion, CategoriesContainer, Comedores, Living, MesasExtensibles, Relax, SofásCama } from './CategoriesGridStyled'




const CategoriesGrid: React.FC = () => {




    return (
        <CategoriesContainer>


            <Relax href='/categories/relax' style={{ backgroundImage: `url(/img/Relax.jpg)` }} >
                <h3>Relax</h3>
            </Relax>


            <CamasMultiposicion href='/categories/camas-multiposicion' style={{ backgroundImage: `url(/img/Multiposicion.jpg)` }}>
                <h3>Camas Multiposición</h3>
            </CamasMultiposicion>


            <Comedores href='/categories/comedores' style={{ backgroundImage: `url(/img/comedores.jpeg)` }}>
                <h3>Comedores</h3>
            </Comedores>


            <MesasExtensibles href='/categories/mesas-extensibles' style={{ backgroundImage: `url(/img/Mesaextensible.jpg)` }}>
                <h3>Mesas Extensibles</h3>
            </MesasExtensibles>


            <SofásCama href='/categories/sofas-cama' style={{ backgroundImage: `url(/img/sofacama.webp)` }}>
                <h3>Sofás Cama</h3>
            </SofásCama>


            <Living href='/categories/living' style={{ backgroundImage: `url(/img/Living.jpg)` }}>
                <h3>Living</h3>
            </Living>

        </CategoriesContainer>
    )
}

export default CategoriesGrid
