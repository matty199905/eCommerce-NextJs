import { createSlice } from "@reduxjs/toolkit"



type ToggleState = {
    showResponsiveMenu: boolean
}

const toggleInitialState: ToggleState = {
    showResponsiveMenu: false,
}


export const toggleMenuSlice = createSlice({
    name: 'toggleMenu',
    initialState: toggleInitialState,
    reducers: {

    
        showMenu: (state) => {
            return {
                ...state,
              showResponsiveMenu: !state.showResponsiveMenu
            }
        },

    }
})


export const { showMenu } = toggleMenuSlice.actions

export default toggleMenuSlice.reducer