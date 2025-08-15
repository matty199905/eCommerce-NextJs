import { createSlice, PayloadAction } from "@reduxjs/toolkit";



 export type User = {
    nombre: string,
    token: string,
    email: string,
    img: string,
    uid: string,

}

 export type UserState = {
    currentUser: User | null,
    modalUser: boolean
}


const userInitialState: UserState = {
    currentUser: null,
    modalUser: false,
}



export const UserSlice = createSlice({

    name: 'user',
    initialState: userInitialState,
    reducers: {

        setCurrentUser: (state, action: PayloadAction<User>) => {
            return {
                ...state,
                currentUser: action.payload
            }
        },

        showModalUser: (state) => {
            return {
                ...state,
                modalUser: !state.modalUser
            }
        },

        logout: state => {
            return {
                ...state,
                currentUser: null
            }
        }


    }

})


export const { setCurrentUser, showModalUser, logout } = UserSlice.actions

export default UserSlice.reducer