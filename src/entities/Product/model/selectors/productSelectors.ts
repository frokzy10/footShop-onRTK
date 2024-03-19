import { createSelector } from "@reduxjs/toolkit";
import { StoreSchema } from "../../../../app/providers/StoreProvider";

const getProductState = (state: StoreSchema) => state.products;

const getProductList = createSelector(
    getProductState,
    (state) => state.list
);
const getProductListData = createSelector(
    getProductList,
    (state) => state.data
);
const getProductListIsLoading = createSelector(
    getProductList,
    (state) => state.isLoading
);
const getProductListError = createSelector(
    getProductList,
    (state) => state.error
);

const getProductCurrent = createSelector(
    getProductState,
    (state )=> state.current
)

const getProductCurrentData = createSelector(
    getProductCurrent,
    (state)=> state.data
)
const getProductCurrentIsLoading = createSelector(
    getProductCurrent,
    (state)=> state.isLoading
)
const getProductCurrentError = createSelector(
    getProductCurrent,
    (state)=> state.error
)

export const productSelectors = {
    getProductList,
    getProductListIsLoading,
    getProductListError,
    getProductListData,
    getProductCurrentData,
    getProductCurrent,
    getProductCurrentIsLoading,
    getProductCurrentError,
};
