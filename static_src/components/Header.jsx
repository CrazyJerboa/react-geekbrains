import React from 'react';

import AppBar from '@material-ui/core/AppBar';

export default class Header extends React.Component {
    render() {
        return (
            <AppBar position="static" className="header">
                Chat
            </AppBar>
        );
    }
}
