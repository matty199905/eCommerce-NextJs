'use client'
import React from 'react'
import { FilterContainer, FiltersContainer, LiContainer } from './ModalCategoriesStyled'
import { useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { filterSelection, show } from '../../../Redux/Filters/filtersSlice'
import { useSelectorTS } from '../../../Utils/constants'
import { AppDispatch } from '../../../Redux/store'
import { FiltersByX } from '../../../Data/filtersData'


const ModalCategories: React.FC = () => {

    const { showFilters } = useSelectorTS(state => state.filters)

    const { selectedFilter } = useSelectorTS(state => state.filters)

    const { payload } = useSelectorTS(state => state.filters)

    const dispatch = useDispatch<AppDispatch>()




    const activeFilter = (filter: FiltersByX) => {

        if (selectedFilter !== null && payload === filter) {
            return true
        }
        else {
            return false
        }
    }


    const filterSelectionAndHideModal = (filter: FiltersByX): void => {
        dispatch(filterSelection(filter));
        dispatch(show())

    }



    return (
        <AnimatePresence>

            {showFilters &&


                <FiltersContainer
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    key="cart-modal">





                    <FilterContainer>
                        <h3>Por Categorias</h3>
                        <ul>
                            <LiContainer $activeFilter={activeFilter('camas multiposiciones')}>
                                <li onClick={() => filterSelectionAndHideModal('camas multiposiciones')}>
                                    Camas multiposiciones
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('comedores')}>
                                <li onClick={() => filterSelectionAndHideModal('comedores')}>
                                    Comedores
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('living')}>
                                <li onClick={() => filterSelectionAndHideModal('living')}>
                                    Living
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('mesas extensibles')}>
                                <li onClick={() => filterSelectionAndHideModal('mesas extensibles')}>
                                    Mesas extensibles
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('relax')}>
                                <li onClick={() => filterSelectionAndHideModal('relax')}>
                                    Relax
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('sofas cama')}>
                                <li onClick={() => filterSelectionAndHideModal('sofas cama')}>
                                    Sofas cama
                                </li>
                            </LiContainer>

                        </ul>
                    </FilterContainer>



                    <FilterContainer>
                        <h3>Material</h3>
                        <ul>
                            <LiContainer $activeFilter={activeFilter('cuero')}>
                                <li onClick={() => filterSelectionAndHideModal('cuero')}>
                                    Cuero
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('eco cuero')}>
                                <li onClick={() => filterSelectionAndHideModal('eco cuero')}>
                                    EcoCuero
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('tela')}>
                                <li onClick={() => filterSelectionAndHideModal('tela')}>
                                    Tela
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('madera')}>
                                <li onClick={() => filterSelectionAndHideModal('madera')}>
                                    Madera
                                </li>
                            </LiContainer>

                        </ul>
                    </FilterContainer>



                    <FilterContainer>
                        <h3>Plazas</h3>
                        <ul>
                            <LiContainer $activeFilter={activeFilter('2 plazas')}>
                                <li onClick={() => filterSelectionAndHideModal('2 plazas')}>
                                    2 plazas
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('1 plaza')}>
                                <li onClick={() => filterSelectionAndHideModal('1 plaza')}>
                                    1 plaza
                                </li>
                            </LiContainer>
                        </ul>
                    </FilterContainer>



                    <FilterContainer>
                        <h3>Tamaño</h3>
                        <ul>
                            <LiContainer $activeFilter={activeFilter('2 cuerpos')}>
                                <li onClick={() => filterSelectionAndHideModal('2 cuerpos')}>
                                    2 Cuerpos
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('2 cuerpos modulares')}>
                                <li onClick={() => filterSelectionAndHideModal('2 cuerpos modulares')}>
                                    2 Cuerpos modulares
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('3 cuerpos')}>
                                <li onClick={() => filterSelectionAndHideModal('3 cuerpos')}>
                                    3 Cuerpos
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('3 cuerpos modulares')}>
                                <li onClick={() => filterSelectionAndHideModal('3 cuerpos modulares')}>
                                    3 Cuerpos modulares
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('esquinero')}>
                                <li onClick={() => filterSelectionAndHideModal('esquinero')}>
                                    Esquinero
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('sillones masajeadores')}>
                                <li onClick={() => filterSelectionAndHideModal('sillones masajeadores')}>
                                    Sillones masajeadores
                                </li>
                            </LiContainer>
                        </ul>
                    </FilterContainer>



                    <FilterContainer>
                        <h3>Entrega</h3>
                        <ul>
                            <LiContainer $activeFilter={activeFilter('35 dias')}>
                                <li onClick={() => filterSelectionAndHideModal('35 dias')}>
                                    35 Dias
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('40 dias')}>
                                <li onClick={() => filterSelectionAndHideModal('40 dias')}>
                                    40 Dias
                                </li>
                            </LiContainer>

                            <LiContainer $activeFilter={activeFilter('entrega inmediata')}>
                                <li onClick={() => filterSelectionAndHideModal('entrega inmediata')}>
                                    Entrega inmediata
                                </li>
                            </LiContainer>
                        </ul>
                    </FilterContainer>

                </FiltersContainer>

            }

        </AnimatePresence>

    )
}

export default ModalCategories
