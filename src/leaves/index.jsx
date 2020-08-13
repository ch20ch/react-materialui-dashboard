
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import leaveApp from './reducers';
import AddLeaves from './containers/AddLeave';
import LeaveListContainer from './containers/LeaveListContainer';

const store = createStore(leaveApp);

const Leave = () => (
  <div>
    <AddLeaves />
    <LeaveListContainer />
    {/* <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
      <Button>kdsjk</Button>
      <Button>skdnksqj</Button>
      <Button>jsdkqjkd</Button>
    </ButtonGroup> */}
  </div>
 
);

export default Leave;
