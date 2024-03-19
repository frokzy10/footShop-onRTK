import {createAsyncThunk} from "@reduxjs/toolkit";
import {IDropDown} from "../types/dropdown";
import {ThunkConfig} from "../../../../app/providers/StoreProvider/config/StoreSchema";

export const getDropDown = createAsyncThunk<IDropDown[], undefined, ThunkConfig<string>>(
    "dropdown/getDropdown",
    async (params, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;
        try {
            const response = await extra.api.get<IDropDown[]>(`/product`)

            if(!response.data){
                throw new Error("Ошибка в getDropdown")
            }
            return response.data
        }catch (e){
            return rejectWithValue("Ошибка в getDropdown")
        }
    }
)