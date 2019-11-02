import React from 'react';
import ReactDOM from 'react-dom';

import Layout from "./components/Layout";
import {BrowserRouter} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from "./components/Router";

import './styles/styles.css';

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Router />
        </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);