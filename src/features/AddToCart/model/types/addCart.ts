type TAddCartTitle = string;
type TAddCartId = number;
type TAddCartPrice = number;
type TAddCartImages = string
type TAddCartDescription = string
interface IAddToCard{
    title:TAddCartTitle;
    images:TAddCartImages;
    id:TAddCartId;
    price:TAddCartPrice;
    description:TAddCartDescription;
    quantity:number

}

export interface IAddCartSchema {
    list: {
        favorites: IAddToCard[];
        error:TNullable<string>;
        isLoading:boolean,
    }
}
export type{
    IAddToCard
}