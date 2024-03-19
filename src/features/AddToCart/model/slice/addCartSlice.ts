import {IAddCartSchema} from "../types/addCart";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getFavorites} from "../services/getFavorites";

const initialState: IAddCartSchema = {
    list: {
        favorites: [],
        error: null,
        isLoading: false,
    }
}

const addCartSlice = createSlice({
    name: 'addCartName',
    initialState,
    reducers: {
        addFavorites(state,action) {

        },
        removeFromFavorites(state, action) {
            const {id} = action.payload
            state.list.favorites = state.list.favorites.filter(item => item.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFavorites.pending, (state) => {
                state.list.isLoading = true;
            })
            .addCase(getFavorites.fulfilled, (state, action) => {
                state.list.isLoading = false;
                state.list.favorites.push(action.payload)
            })
            .addCase(getFavorites.rejected, (state, action) => {
                state.list.isLoading = false;
                state.list.error = action.payload ?? null;
            })
    }
})

export const { removeFromFavorites } = addCartSlice.actions;
export const {
    name: addCartName,
    reducer: addCartReducer,
    actions: addCartActions
} = addCartSlice;
//