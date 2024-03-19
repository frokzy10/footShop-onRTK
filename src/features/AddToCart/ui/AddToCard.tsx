import React from "react";
import {IAddToCard} from "../model/types/addCart";
import cls from "../../AddToCartInfo/ui/AddToCartInfo.module.scss";
interface IAddToCartProps {
    render: (item: IAddToCard) => React.ReactElement;
    favorites: IAddToCard[]
}

const AddToCard = (props: IAddToCartProps) => {
    const {render,favorites} = props


    if(!favorites.length){
        return <div className={cls.totalCart}>Колличество товара в корзине {favorites.length}</div>
    }

    return(
        <>
            <div className={cls.container}>
                <h2 className={cls.cart}>Корзина</h2>
                <div className={cls.totalCart}>Товаров в корзине {favorites.length}</div>
                {favorites.map(item => <li key={item.id}>{render(item)}</li>)}
            </div>
        </>
    )
};

export default AddToCard;