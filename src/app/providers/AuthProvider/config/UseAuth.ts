import {useContext} from "react";
import {AuthContext} from "../ui/AuthProvider";

export function UseAuth(){
    return useContext(AuthContext);
}