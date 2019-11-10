import React from 'react';

import {Link} from 'react-router-dom';
import Header from "./Header";
import Grid from "@material-ui/core/Grid";

export default class Profile extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header chatId="Profile" />

                <Grid container spacing={2} className="container-main">
                    <h1>Профиль</h1>
                </Grid>
            </div>
        )
    }
}
