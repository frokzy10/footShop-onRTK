import {createAsyncThunk} from "@reduxjs/toolkit";

import {ThunkConfig} from "../../../../app/providers/StoreProvider/config/StoreSchema";
import {IAddToCard} from "../types/addCart";

export const getFavorites = createAsyncThunk<
    IAddToCard,
    number,
    ThunkConfig<string>
>(
    "favorite/getFavorites",
    async (id, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;
        try {
            const response = await extra.api.get<IAddToCard>(`/product/${id}`)

            if (!response.data) {
                throw new Error("Ошибка в избранных")
            }

            return response.data
        } catch (e) {
            return rejectWithValue("Ошибка в выводе избранных")
        }
    }
)