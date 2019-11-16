import React from 'react';
import ReactDOM from 'react-dom';

import Layout from "./containers/Layout";
import {BrowserRouter} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from "./containers/Router";

import  {Provider} from 'react-redux';
import initStore, { history } from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = initStore();

import './styles/styles.css';

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);