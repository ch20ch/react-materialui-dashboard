import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const Leave = ({ title }) =><List component="nav"  aria-label="Leave">
                                <ListItem button>
                                    <ListItemText primary="{ title }" />
                                </ListItem>
                            </List>;

Leave.propTypes = {
  title: PropTypes.string.isRequired
};

export default Leave;