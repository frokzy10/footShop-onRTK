import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TAuthByUsernameSchema} from "../types/authByUserName";


const initialState: TAuthByUsernameSchema = {
    username: "",
    password: "",
    error: null
}

const loginByUserNameSlice = createSlice({
    name: 'authByUserName',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<{ filed: "username" | "password", value: string }>) => {
            const {filed, value} = action.payload;
            state[filed] = value
        }
    }
})

export const {
    name: authByUserName,
    reducer: authByReducer,
    actions: authByActions
} = loginByUserNameSlice;