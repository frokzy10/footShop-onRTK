import {StoreSchema} from "../../../../app/providers/StoreProvider";
import {createSelector} from "@reduxjs/toolkit";


const getAddCartState = (state: StoreSchema) => state.addCartName;

const getAddCartList = createSelector(
    getAddCartState,
    (state) => state.list
)
const getAddCartFavorites = createSelector(
    getAddCartList,
    (state) => state.favorites
)

const getAddCartIsLoading = createSelector(
    getAddCartList,
    (state) => state.isLoading
)
const getAddCartError = createSelector(
    getAddCartList,
    (state) => state.error
)

export const addCartSelectors = {
    getAddCartList,
    getAddCartFavorites,
    getAddCartIsLoading,
    getAddCartError,
}