/*
    actions of modal 
*/

import * as constants from './constants';

export function toggleDeleteItemModal(payload) {
  return {
    type: constants.TOGGLE_DELETE_ITEM_MODAL,
    payload,
  };
}

export function toggleDeleteItemModalSuccess(payload) {
  return {
    type: constants.TOGGLE_DELETE_ITEM_MODAL_SUCCESS,
    payload,
  };
}

export function toggleAddUserModal(payload) {
  return {
    type: constants.TOGGLE_ADD_USER_MODAL,
    payload,
  };
}

export function toggleAddUserModalSuccess(payload) {
  return {
    type: constants.TOGGLE_ADD_USER_MODAL_SUCCESS,
    payload,
  };
}
