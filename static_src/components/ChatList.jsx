import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {Link} from 'react-router-dom';

export default class ChatList extends React.Component {
    render() {
        return (
            <List className="list__users">
                <Link to="/chat/1/">
                    <ListItem button>
                            <ListItemText primary="John Doe" secondary="Jan 9, 2014" />
                    </ListItem>
                </Link>
                <Link to="/chat/2/">
                    <ListItem button>
                            <ListItemText primary="John Doe" secondary="Jan 9, 2014" />
                    </ListItem>
                </Link>
                <Link to="/chat/3/">
                    <ListItem button>
                            <ListItemText primary="John Doe" secondary="Jan 9, 2014" />
                    </ListItem>
                </Link>
            </List>
        );
    }
}