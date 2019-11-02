import React from 'react';
import PropTypes from "prop-types";

import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import List from "@material-ui/core/List";

export default class Header extends React.Component {

    static defaultProps = {
        chatId: 1,
    };

    render() {
        console.log(this.props.chatId)
        return (
            <AppBar position="static" className="header">
                {this.props.chatId == 'Profile' ? (
                    <div className="header__inner">
                        <Link to="/">Back</Link>
                        <h1>Profile</h1>
                    </div>
                ) : (
                    <div className="header__inner">
                        <h1>Chat { this.props.chatId }</h1>
                        <Link to="/profile">Profile</Link>
                    </div>
                )}
            </AppBar>
        );
    }
}
