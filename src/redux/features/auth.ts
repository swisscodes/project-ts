import { createSlice } from '@reduxjs/toolkit'


export interface IUser {
    user: {
        id:number,
        email:string,
        [key:string]:any
    }
}

const initialState:IUser = {
    user:{id:0, email:''}
}



export const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    reducers: {
        setUser : (state, action) => {
            state.user = action.payload
        },
    }

})

// Action creators are generated for each case reducer function
export const { setUser } = AuthSlice.actions

export default AuthSlice.reducer
