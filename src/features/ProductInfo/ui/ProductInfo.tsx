import React from 'react';
import {IProduct} from "../../../entities/Product";
import cls from "./ProductInfo.module.scss";
import {Link} from "react-router-dom";

interface IProductCardProps {
    item: IProduct
}

const ProductInfo = (props: IProductCardProps) => {
    const {item} = props;

    return (
        <>
            <Link to={`/product_details/${item.id}`} >
                <div className={cls.ProductCardContainer}>
                    <div className={cls.card}>
                        <span className={cls.cardTitle}>{item.title}</span>
                        <p className={cls.cardDescription}>{item.description}</p>
                        <h2 className={cls.cardPrice}>{item.price}</h2>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ProductInfo;