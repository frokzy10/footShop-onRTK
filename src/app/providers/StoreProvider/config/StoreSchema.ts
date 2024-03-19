
import {IProductSchema} from "../../../../entities/Product";
import {productListReducerName} from "../../../../entities/Product";
import {AxiosInstance} from "axios";
import {IUserSchema, userReducerName} from "../../../../entities/User";
import {authByUserName} from "../../../../features/AuthByUsername/model/slice/loginByUserNameSlice";
import {TAuthByUsernameSchema} from "../../../../features/AuthByUsername/model/types/authByUserName";
import {IAddCartSchema} from "../../../../features/AddToCart";
import {addCartName} from "../../../../features/AddToCart";
import {Reducer} from "react";
import {dropdownName} from "../../../../entities/DropDown/model/slice/dropdownSlice";
import {IDropDownSchema} from "../../../../entities/DropDown";
export interface StoreSchema{
    [productListReducerName]:IProductSchema,
    [userReducerName]:IUserSchema,
    [authByUserName]:TAuthByUsernameSchema,
    [addCartName]:IAddCartSchema,
    [dropdownName]:IDropDownSchema
}

export interface ReducerMap {
    [productListReducerName]: Reducer<IProductSchema, any>;
    [userReducerName]: Reducer<IUserSchema, any>;
    [authByUserName]: Reducer<TAuthByUsernameSchema, any>;
    [addCartName]: Reducer<IAddCartSchema, any>;
    [dropdownName]:Reducer<IDropDownSchema, any>
}
export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T>{
    rejectValue: T;
    extra:ThunkExtraArg,
    state:StoreSchema
}