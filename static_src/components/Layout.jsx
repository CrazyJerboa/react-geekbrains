import React from 'react';

import Grid from '@material-ui/core/Grid';

import Header from "./Header";
import ChartList from "./ChartList";
import MessageField from "./MessageField";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header/>

                <Grid container spacing={2} className="container-main">
                    <Grid item xs={3}>
                        <ChartList/>
                    </Grid>
                    <Grid item xs={9}>
                        <MessageField/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}