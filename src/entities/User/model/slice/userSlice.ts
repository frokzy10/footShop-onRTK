import {createSlice} from "@reduxjs/toolkit";
import {IUserSchema} from "../types/user";

const initialState:IUserSchema = {
    _inited :false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setAuthData:(state,action)=> {
            state.authData = action.payload;
        }
    }
})

export const {
    name:userReducerName,
    reducer: userReducer,
    actions:userActions
} = userSlice;