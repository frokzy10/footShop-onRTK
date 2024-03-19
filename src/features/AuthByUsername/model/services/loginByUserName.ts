import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../../../entities/User/model/types/user";
import {ThunkConfig} from "../../../../app/providers/StoreProvider/config/StoreSchema";
import {userActions} from "../../../../entities/User";
import {TUserData} from "../types/authByUserName";
import {authByActions} from "../slice/loginByUserNameSlice";


export const loginByUserName = createAsyncThunk<
    IUser,
    TUserData,
    ThunkConfig<string>
>(
    "authByUserName/auth",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;

        try {
            const response = await extra.api.post('/login', data);

            if (!response.data) {
                throw new Error();
            }

            dispatch(userActions.setAuthData(response.data));
            dispatch(authByActions.set({filed:"username",value: ""}))
            dispatch(authByActions.set({filed:"password",value: ""}))
            return response.data;
        } catch (error) {
            alert("Вы не смогли войти ,возможно не правильно ввели данные.Проверьте точность написания данных");
            return rejectWithValue("Вы не смогли войти ,возможно не правильно ввели данные.Проверьте точность написания данных");
        }
    }
)
