import React from 'react';
import ReactDOM from 'react-dom';

import Layout from "./components/Layout";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles/styles.css';

ReactDOM.render(
    <MuiThemeProvider>
        <Layout />
    </MuiThemeProvider>,
    document.getElementById('root'),
);