import React from 'react';
import {IProduct} from "../../../entities/Product";
import cls from "./ProductList.module.scss";

interface IProductProps {
    render: (item: IProduct) => React.ReactElement;
    list: IProduct[]
}

const ProductList = (props: IProductProps) => {
    const {render, list} = props;


    if (list.length === 0) {
        return <div className={cls.Loading}>Loading....</div>
    }

    if (!list.length) {
        return <div>Nety towarov v nalichee</div>;
    }

    return (
        <>
            <h2 className={cls.productTitle}>Наши товары</h2>
            <div className={cls.productCardContainer}>
                {list.map(item => <li key={item.id}>{render(item)}</li>)}
            </div>
        </>
    );
};

export default ProductList;