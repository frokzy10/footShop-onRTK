import React, {useLayoutEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {productSelectors} from "../../../entities/Product";
import {getProductById} from "../../../entities/Product/model/services/getProductById";
import ProductDetails from "../../../features/ProductDetails/ui/ProductDetails";

const ProductDetailsPage = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch();
    const product = useSelector(productSelectors.getProductCurrentData);

    useLayoutEffect(() => {
        if(id){
            dispatch(getProductById(+id))
        }
    }, [dispatch,id]);

    
    if(!product) return <div style={{textAlign:'center',fontSize:'35px',fontFamily:'open sans',color:"#fff"}}>Loading...</div>

    return (
        <ProductDetails  product={product}/>
    );
};

export default ProductDetailsPage;