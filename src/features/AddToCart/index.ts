import {
    IAddToCard,IAddCartSchema
} from "./model/types/addCart";

export type {
    IAddCartSchema,
    IAddToCard
}
export {
    addCartName,
    addCartReducer,
    addCartActions
} from "./model/slice/addCartSlice"

export {
    addCartSelectors
}from "./model/selectors/addCartSelectors"

export {getFavorites} from "./model/services/getFavorites"