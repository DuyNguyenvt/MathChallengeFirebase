import produce from 'immer';
import * as constants from './constants';

export const initState = {
  deleteItemModal: {
    status: false,
  },
  addUserModal: {
    status: false,
  },
};

const modalReducer = (state = initState, action) =>
  produce(state, newState => {
    switch (action.type) {
      case constants.TOGGLE_DELETE_ITEM_MODAL:
        break;
      case constants.TOGGLE_DELETE_ITEM_MODAL_SUCCESS:
        newState.deleteItemModal = action.payload;
        break;

      case constants.TOGGLE_ADD_USER_MODAL:
        break;
      case constants.TOGGLE_ADD_USER_MODAL_SUCCESS:
        newState.addUserModal = action.payload;
        break;
    }
  });

export default modalReducer;
