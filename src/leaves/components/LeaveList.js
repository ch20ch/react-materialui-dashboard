import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Leave from './Leave';

const LeaveList = ({ leaveList }) => (

    <List component="nav"  aria-label="Leave">
        <ListItem button>
               {/*  {leaveList.map((leave, index) => (
                        <Leave key={index} {...leave} />
                    ))} */}
        </ListItem>
    </List>
);

LeaveList.propTypes = {
  leaveList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default LeaveList;