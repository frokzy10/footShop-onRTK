import {IDropDownSchema} from "../types/dropdown";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getDropDown} from "../services/getDropDown";

const initialState: IDropDownSchema = {
    list: {
        data: [],
        searchResult: "",
        error: null,
        isLoading: false
    }
}

const dropdownSlice = createSlice({
    name: "dropdown",
    initialState,
    reducers: {
        setSearchResult: (state, action:PayloadAction<string>) => {
            state.list.searchResult = action.payload
        },
        setSearchProduct: (state, action) => {
            state.list.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDropDown.pending, (state) => {
                state.list.isLoading = false
            })
            .addCase(getDropDown.fulfilled, (state, action) => {
                state.list.data = action.payload
                state.list.isLoading = true
            })
            .addCase(getDropDown.rejected,(state,action)=>{
                state.list.error = action.payload || null
                state.list.isLoading = false
            })
    }
})

export const {setSearchResult, setSearchProduct} = dropdownSlice.actions;

export const {
    name: dropdownName,
    reducer: dropdownReducer,
    actions: dropdownAction
} = dropdownSlice;