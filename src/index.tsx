import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "./app/providers/StoreProvider";
import {AuthProvider} from "./app/providers/AuthProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AuthProvider>
            <StoreProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </StoreProvider>
        </AuthProvider>
    </React.StrictMode>
);
