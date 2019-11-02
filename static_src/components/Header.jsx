import React from 'react';
import PropTypes from "prop-types";

import AppBar from '@material-ui/core/AppBar';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <AppBar position="static" className="header">
                Chat { this.props.chatId }
            </AppBar>
        );
    }
}
