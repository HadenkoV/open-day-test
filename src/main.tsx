import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './App';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)