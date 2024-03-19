import React, {useCallback, ChangeEvent, useState} from 'react';
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getAuthData} from "../model/selectors/authByUserSelectors";
import cls from "./AuthByUserName.module.scss";
import {loginByUserName} from "../model/services/loginByUserName";
import {authByActions} from "../model/slice/loginByUserNameSlice";

interface InputProps {
    onChange?: (value: string) => void;
}

const AuthByUsername: React.FC<InputProps> = ({onChange}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {username, password} = useSelector(getAuthData);
    const [loading, setLoading] = useState(false)

    const onChangeFunc = useCallback((filed: "username" | "password") => (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        dispatch(authByActions.set({filed, value}));
    }, [dispatch]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            alert('Введите поле ввода');
            return;
        }

        setLoading(true);

        const res = await dispatch(loginByUserName({username, password}));

        setLoading(false);

        if (res.meta.requestStatus === "fulfilled") {
            console.log("USER REG")
            navigate("/product_details/buy");
        }
    };


    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <form className={cls.AuthForm} onSubmit={onSubmit}>
                    <h2 className={cls.AuthTitle}>Войдите в аккаунт</h2>
                    <input onChange={onChangeFunc("username")} value={username} type="text"
                           placeholder="Введите ваше имя"
                           name="username"/>
                    <input onChange={onChangeFunc("password")} value={password} type="password"
                           placeholder="Введите пароль"
                           name="password"/>
                    <button type="submit">Войти</button>
                </form>
            )}
        </div>
    )
        ;
};

export default AuthByUsername;