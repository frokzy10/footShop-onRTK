import React, {PropsWithChildren} from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";


type TStoreProvider = {} & PropsWithChildren

const StoreProvider = ({children}: TStoreProvider) => {
    const {store} = createReduxStore();
    return (
        <Provider store={store}>
                {children}
        </Provider>
    );
};

export default StoreProvider;