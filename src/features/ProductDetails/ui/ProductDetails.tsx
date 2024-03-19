import React, { useState } from 'react';
import { IProduct } from "../../../entities/Product";
import cls from "./ProductDetails.module.scss";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getFavorites } from "../../AddToCart";
import { removeFromFavorites } from "../../AddToCart/model/slice/addCartSlice";

interface IProductDetailsProps {
    product: IProduct;
}

const ProductDetails: React.FC<IProductDetailsProps> = (props) => {
    const { product} = props
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const [isFav, setIsFav] = useState(true);


    const toggleFavorites = () => {
        if (!isFav) {
            dispatch(removeFromFavorites(product.id));
            alert("Продукт удален из корзины");
            setIsFav(true)
        } else {
            if (id) {
                dispatch(getFavorites(+id));
                setIsFav(false)
                alert('Продукт добавлен в корзину');
            }
        }
    };


    return (
        <div key={product.id} className={cls.productDetails}>
            <div className={cls.leftSide}>
                <img src={product.images} alt="img" />
            </div>
            <div className={cls.rightSide}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>{product.price}</h3>
                <div className={cls.rightSideBottom}>
                    {!isFav && (
                        <button className={cls.buyProduct} onClick={toggleFavorites}>Удалить из корзины</button>
                    )}
                    {isFav && (
                        <button className={cls.buyProduct} onClick={toggleFavorites}>Добавить в корзину</button>
                    )}
                    <Link to="/auth">
                        <button className={cls.buyProduct}>Купить</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;