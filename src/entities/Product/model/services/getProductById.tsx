import {createAsyncThunk} from "@reduxjs/toolkit";
import {IProduct} from "../types/product";
import {ThunkConfig} from "../../../../app/providers/StoreProvider/config/StoreSchema";

export const getProductById = createAsyncThunk<IProduct,number,ThunkConfig<string>>(
    "products/getProductById",

    async (id, thunkAPI)=>{
        const {extra, rejectWithValue} = thunkAPI;
        try {
            const response = await extra.api.get<IProduct>(`/product/${id}`)

            if(!response.data){
                throw new Error()
            }
            return response.data;
        }catch (error){
            return rejectWithValue("Ошибка в getProductById")
        }
    }
)