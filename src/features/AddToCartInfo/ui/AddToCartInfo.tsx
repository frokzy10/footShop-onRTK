import React from 'react';
import cls from "./AddToCartInfo.module.scss"
import {addCartSelectors, getFavorites, IAddToCard} from "../../AddToCart";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {removeFromFavorites} from "../../AddToCart/model/slice/addCartSlice";
import {BsBasket2Fill} from "react-icons/bs";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import CartCounter from "../../../widgets/CartCounter/ui/CartCounter";

interface IAddDataProps {
    item: IAddToCard
}

const AddToCartInfo = (props: IAddDataProps) => {
    const {item} = props
    const dispatch = useAppDispatch();
    const {id} = useParams()
    const deleteFavorite = () => {
        dispatch(removeFromFavorites(item))
    }


    return (
        <>
            <div className={cls.container}>
                <div className={cls.cardContainer} key={item.id}>
                    <img className={cls.cardImg} src={item.images + ''} alt=""/>
                    <h2>{item.title}</h2>
                    <div className={cls.cartRight}>
                        <CartCounter/>
                        <BsBasket2Fill title={"Удалить"} onClick={deleteFavorite} className={cls.cartBasket}/>
                        <h3>Цена: {item.price}</h3>
                    </div>
                </div>
                <br/>

            </div>
        </>
    );
};

export default AddToCartInfo;
