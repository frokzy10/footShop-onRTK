import {ReactNode} from "react";
import {IUser} from "../../../../entities/User/model/types/user";

export interface IUserSchemaNavigate {
    authData?:IUser;
}

export interface IAuthContextSchema{
    user:IUserSchemaNavigate | null,
    signIn:<T>(newUser : T,cb:AuthCallbackVoid) => void,
    signOut: (cb: AuthCallbackVoid) => void;
}
export interface AuthPageProps {
    children: ReactNode;
}

export type AuthCallbackVoid = () => void;