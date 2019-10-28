import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class ChartList extends React.Component {
    render() {
        return (
            <List className="list__users">
                <ListItem button selected>
                    <ListItemText primary="John Doe" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="John Doe" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="John Doe" secondary="Jan 9, 2014" />
                </ListItem>
            </List>
        );
    }
}