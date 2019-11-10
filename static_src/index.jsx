import React from 'react';
import ReactDOM from 'react-dom';

import Layout from "./containers/Layout";
import {BrowserRouter} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from "./containers/Router";

import  {Provider} from 'react-redux';
import initStore from './store/store';

import './styles/styles.css';

ReactDOM.render(
    <Provider store={initStore()}>
        <BrowserRouter>
            <MuiThemeProvider>
                <Router />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);