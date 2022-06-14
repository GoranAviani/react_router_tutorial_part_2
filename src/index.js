import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import App from "./App";
import Invoices from "./components/Invoices";
import Expenses from "./components/Expenses";
import Invoice from "./components/Invoice";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="invoices" element={<Invoices/>}>
                        <Route path=":invoiceID" element={<Invoice/>}/>
                    </Route>
                    <Route path="expenses" element={<Expenses/>}/>
                    <Route path="*" element={<main style={{padding: "1rem"}}> Whoops! This url does not exist</main>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
