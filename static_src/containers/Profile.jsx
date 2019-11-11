import React from 'react';

import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

import {Link} from 'react-router-dom';
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import {sendMessage} from "../actions/messageActions";

class Profile extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header chatId="Profile" />

                <Grid col spacing={2} className="container-main">
                    <h1>Профиль пользователя {this.props.profile.name}</h1>

                    <p>Возраст: {this.props.profile.age}</p>
                    <p>E-mail: {this.props.profile.email}</p>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({profileReducer}) => ({
    profile: profileReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
