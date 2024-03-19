import React from 'react';
import cls from "./MainPage.module.scss"


const MainPage = () => {
    return (
        <div className={cls.MainContainer}>
            <h2 className={cls.MainTitle}>Сайт сделан Нурдином</h2>
            <p className={cls.MainSubtitle}>Хотите узнать больше о нашем товаре?</p>
            <button className={cls.MainButton}>Узнать</button>
        </div>
    );
};

export default MainPage;