export {
    userActions,
    userReducer,
    userReducerName
}from "./model/slice/userSlice";

export type {
    IUserSchema
}from "./model/types/user"

export{
    getAuthData
} from "./model/selectors/userSelectors";