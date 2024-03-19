import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ReducerMap, ThunkExtraArg} from "./StoreSchema";
import {productListReducerName, productReducer} from "../../../../entities/Product";
import {$api} from "../../../../shared/api/api";
import {userReducer, userReducerName} from "../../../../entities/User";
import {authByReducer, authByUserName} from "../../../../features/AuthByUsername/model/slice/loginByUserNameSlice";
import {addCartName, addCartReducer} from "../../../../features/AddToCart";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {dropdownName, dropdownReducer} from "../../../../entities/DropDown/model/slice/dropdownSlice";


export const createReduxStore = () => {
    const rootReducer = combineReducers<ReducerMap>({
        [productListReducerName]: productReducer,
        [userReducerName]: userReducer,
        [authByUserName]: authByReducer,
        [addCartName]: addCartReducer,
        [dropdownName]:dropdownReducer,
    });

    const extraArg: ThunkExtraArg = {
        api: $api
    };

    const persistConfig = {
        key: 'root',
        storage,
        whitelist: [productListReducerName, userReducerName, authByUserName, addCartName]
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
            serializableCheck:{
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
    });

    // const persistor = persistStore(store);

    return {store};
};

const {store} = createReduxStore();


export {store};

export type AppDispatch = typeof store.dispatch;