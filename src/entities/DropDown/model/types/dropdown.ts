type TProductTitle = string;
type TProductId = number;
type TProductPrice = number;
type TProductDescription = string;
type TProductImages = string


interface IDropDown{
    title:TProductTitle;
    description:TProductDescription;
    images:TProductImages;
    id:TProductId;
    price:TProductPrice;
}
interface IDropDownSchema {
    list:{
        data:IDropDown[],
        searchResult:string,
        error:TNullable<string>,
        isLoading:boolean
    }
}
export type {IDropDownSchema,IDropDown};