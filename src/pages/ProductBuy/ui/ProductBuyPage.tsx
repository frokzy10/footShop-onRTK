import React from 'react';
import {UseAuth} from "../../../app/providers/AuthProvider/config/UseAuth";
import {useNavigate} from "react-router-dom";

const ProductBuyPage = () => {
    const { user } = UseAuth();
    const navigate = useNavigate();

    if (!user) navigate("/auth")

    return (
        <div>
            ProductBuy PAGE
        </div>
    );
};

export default ProductBuyPage