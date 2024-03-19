import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getProductList, IProduct, productSelectors} from '../../../entities/Product';
import {useAppDispatch} from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import ProductInfo from '../../../features/ProductInfo/ui/ProductInfo';
import ProductList from "../../../widgets/ProductList/ui/ProductList";

const ProductListPage = () => {
    const dispatch = useAppDispatch();
    const list = useSelector(productSelectors.getProductListData);

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    return (
        <ProductList
            list={list}
            render={(item:IProduct) => (
                <ProductInfo item={item}/>
            )}
        />
    );
};

export default ProductListPage;
