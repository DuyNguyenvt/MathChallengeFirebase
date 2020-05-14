// import config from 'global-config';
import {call, put, takeLatest} from 'redux-saga/effects';
// import request from 'utils/request';

import * as _ from 'lodash';

import * as actions from './actions';
import * as constants from './constants';

function* onToggleDeleteItemModal(action) {
  try {
    yield put(actions.toggleDeleteItemModalSuccess(action.payload));
  } catch (err) {}
}

function* onToggleAddUserModal(action) {
  try {
    yield put(actions.toggleAddUserModalSuccess(action.payload));
  } catch (err) {}
}

export default function* modalSaga() {
  yield takeLatest(constants.TOGGLE_DELETE_ITEM_MODAL, onToggleDeleteItemModal);
  yield takeLatest(constants.TOGGLE_ADD_USER_MODAL, onToggleAddUserModal);
}

// function* onGetLatestResearchs(action) {
//   let requestURL = `${config.apiUrl}/research/latest-items`;

//   try {
//     const res = yield call(request, requestURL, {
//       method: 'GET',
//     });

//     yield put(actions.getLatestResearchsSuccess(_.get(res, 'data.content')));
//   } catch (err) {
//     yield put(actions.getLatestResearchsFailed(err));
//   }
// }
