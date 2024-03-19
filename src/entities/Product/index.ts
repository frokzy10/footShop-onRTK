import{
    IProduct,
    IProductSchema,
} from "./model/types/product";

export type {
    IProduct,
    IProductSchema,
}

export{
    productListReducerName,
    productReducer,
    productActions
} from "./model/slice/productSlice";

export {
    productSelectors
} from "./model/selectors/productSelectors"

export {getProductList} from "./model/services/getProductList";