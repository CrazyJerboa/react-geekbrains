import React from 'react';
import PropTypes from "prop-types";

import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import List from "@material-ui/core/List";

export default class Header extends React.Component {
    static propTypes = {
        chats: PropTypes.object,
        chatId: PropTypes.number
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <AppBar position="static" className="header">
                {this.props.chatId == 'Profile' ? (
                    <div className="header__inner">
                        <Link to="/">Back</Link>
                        <p></p>
                    </div>
                ) : (
                    <div className="header__inner">
                        <h1>{ this.props.chatsName }</h1>
                        <Link to="/profile">Profile</Link>
                    </div>
                )}
            </AppBar>
        );
    }
}
