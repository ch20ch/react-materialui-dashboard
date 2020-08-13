export const ADD_LEAVE = 'ADD_LEAVE';

export function addLeave(title) {
  return {
    type: ADD_LEAVE,
    leaveItem: {
      _id: (new Date().getTime()),
      title
    }
  };
}