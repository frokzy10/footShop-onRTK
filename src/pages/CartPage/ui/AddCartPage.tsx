import React from 'react';
import {useSelector} from "react-redux";
import {addCartSelectors} from "../../../features/AddToCart";
import AddToCard from "../../../features/AddToCart/ui/AddToCard";
import AddToCartInfo from "../../../features/AddToCartInfo/ui/AddToCartInfo";

const AddCartPage = () => {
    const favorites = useSelector(addCartSelectors.getAddCartFavorites);

    return (
        <>
            <AddToCard favorites={favorites} render={(item) => (
                <AddToCartInfo key={item.id} item={item}/>
            )}/>
        </>
    );
};

export default AddCartPage;
