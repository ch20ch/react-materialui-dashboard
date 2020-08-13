import { connect } from 'react-redux';
import LeaveList from '../components/LeaveList';

const mapStateToProps = state => {
  return {
    leaveList: state.leaveList
  };
};

const LeaveListContainer = connect(mapStateToProps)(LeaveList);

export default LeaveListContainer;