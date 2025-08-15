import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type FiltersState = {
    showFilters: boolean,
    selectedFilter: null | string
    payload: null | string
}



const filtersInitialState: FiltersState = {
    showFilters: false,
    selectedFilter: null,
    payload: null,
}


export const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {

        show: (state) => {
            return {
                ...state,
                showFilters: !state.showFilters
            }
        },
        filterSelection: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                selectedFilter: state.selectedFilter !== action.payload ? action.payload : null,
                payload: action.payload
            }
        },
        deleteFilter: (state) => {
            return {
                ...state,
                selectedFilter: null,
            }
        }
    }
})


export const { show, filterSelection, deleteFilter } = filtersSlice.actions

export default filtersSlice.reducer