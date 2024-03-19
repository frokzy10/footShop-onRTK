type TProductTitle = string;
type TProductId = number;
type TProductPrice = number;
type TProductDescription = string;
type TProductImages = string

interface IProduct{
    title:TProductTitle;
    description:TProductDescription;
    images:TProductImages;
    id:TProductId;
    price:TProductPrice;
}

interface IProductSchema {
    list: {
        data: IProduct[],
        isLoading:boolean
        error: TNullable<string>
    },
    current: {
        data:TNullable<IProduct>,
        isLoading:boolean,
        error: TNullable<string>
    }
}

export type {
    IProduct,
    IProductSchema,
};
