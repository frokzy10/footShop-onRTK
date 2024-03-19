import React from 'react';
import cls from "./Header.module.scss"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {addCartSelectors} from "../../../features/AddToCart";
import ShowInputData from "../../../features/ShowInputData/ui/ShowInputData";

const Header = () => {
    const favorites = useSelector(addCartSelectors.getAddCartFavorites)

    return (
        <header className={cls.header}>
            <nav className={cls.HeaderNav}>
                <Link to="/">
                    <h2 className={cls.HeaderTitle}>FootShop</h2>
                </Link>
                <ul>
                    <li><Link to="/product_list">Товары</Link></li>
                    <li><Link to="*">Ничего</Link></li>
                    <li><Link to="*">Ничего</Link></li>
                    <li className={cls.cartLiCon}><Link to="/cart">Корзина</Link>
                        <div className={cls.totalCart}>{favorites.length}</div>
                    </li>
                </ul>
                <div className={cls.headerRight}>
                    <ShowInputData/>
                </div>
            </nav>
        </header>
    );
};

export default Header;