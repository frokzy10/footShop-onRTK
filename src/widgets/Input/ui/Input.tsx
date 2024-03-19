import React, {useState} from 'react';
import cls from "./Input.module.scss"
import {IDropDown} from "../../../entities/DropDown";
import {Link} from "react-router-dom";

interface IDropdownProps {
    data: IDropDown[]
}

const Input = (props: IDropdownProps) => {
    const {data} = props;
    const [showTerm, setShowTerm] = useState("")
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredData, setFilteredData] = useState<IDropDown[]>(data);

    const filteredProduct = (e: any) => {
        const trim = e.target.value;
        setShowTerm(trim)

        setShowDropDown(trim.length > 0);
        const filtered = trim.length > 0 ? data.filter(item =>
            item.title.toLowerCase().includes(trim.toLowerCase())
        ) : data;

        setFilteredData(filtered)
    }

    const clearInput = () => {
        setShowTerm('');
        setShowDropDown(false)
    }
    return (
        <div className={cls.inputContainer}>
            <input type="search" placeholder="Найти товар" value={showTerm} onChange={filteredProduct}/>
            {showDropDown && (<ul className={cls.inputDropdown}>
                {filteredData.length === 0 ? (
                    <div className={cls.noneTitle}>
                        Такого товара нет
                    </div>
                ) :
                (filteredData.map(item => (
                    <Link onClick={clearInput} key={item.id} to={`/product_details/${item.id}`}>
                        <div className={cls.searchBox}>
                            <img className={cls.searchImg} src={item.images} alt=""/>
                            <li>{item.title}</li>
                        </div>
                    </Link>
                )))}
            </ul>)}
        </div>
    );
};

export default Input;