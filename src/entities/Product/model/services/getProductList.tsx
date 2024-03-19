import {createAsyncThunk} from "@reduxjs/toolkit";
import {IProduct} from "../types/product";
import {ThunkConfig} from "../../../../app/providers/StoreProvider/config/StoreSchema";


export const getProductList = createAsyncThunk<IProduct[], undefined, ThunkConfig<string>>(
    "products/getProductList",
    async (params,thunkAPI) => {
        const { extra,rejectWithValue} = thunkAPI;
        try {
            const response = await extra.api.get<IProduct[]>("/product");

            if(!response.data){
                throw new Error("Ошибка в productList")
            }
            return response.data;
        } catch (error) {
            return rejectWithValue("Произошла ошибка")
        }
    }
)