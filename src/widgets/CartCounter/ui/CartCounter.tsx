import React from 'react';
import cls from "../../../features/AddToCartInfo/ui/AddToCartInfo.module.scss";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useParams} from "react-router-dom";
import {removeFromFavorites} from "../../../features/AddToCart/model/slice/addCartSlice";
import {addCartSelectors, getFavorites} from "../../../features/AddToCart";
import {useSelector} from "react-redux";

const CartCounter = () => {
    const dispatch = useAppDispatch();
    const favorites = useSelector(addCartSelectors.getAddCartFavorites)
    const {id} = useParams()
    const deleteFavorite = () => {
        dispatch(removeFromFavorites(favorites))
    }

    const addCountFav = () => {
        if (id) {
            dispatch(getFavorites(+id))
        }
    }

    return (
        <div className={cls.quantityControl}>
            <button onClick={deleteFavorite}>-</button>
            <span></span>
            <button onClick={addCountFav}>+</button>
        </div>
    );
};

export default CartCounter;