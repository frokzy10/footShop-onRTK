import {StoreSchema} from "../../../../app/providers/StoreProvider";
import {createSelector} from "@reduxjs/toolkit";

const getDropdownState = (state:StoreSchema) => state.dropdown;

const getDropdownList = createSelector(
    getDropdownState,
    (state) => state.list
)
const getDropdownData = createSelector(
    getDropdownList,
    (state) => state.data
)
const getDropdownResult = createSelector(
    getDropdownList,
    (state) => state.searchResult
)


export const dropdownSelectors = {
    getDropdownData,
    getDropdownResult,
    getDropdownList,
    getDropdownState
}