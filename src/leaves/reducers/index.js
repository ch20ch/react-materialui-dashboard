import { ADD_LEAVE } from '../actions';

const initialState = {
  leaveList: []
};

export default function leaveApp(state = initialState, action) {
  switch (action.type) {
    case ADD_LEAVE:
      let newLeaveList = [
        ...state.leaveList,
        {
          ...action.leaveItem
        }
      ];
      return {
        ...state,
        leaveList: newLeaveList
      };
    default:
      return state;
  }
}