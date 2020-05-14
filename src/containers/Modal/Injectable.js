import {connect} from 'react-redux';
import {compose} from 'redux';
// import { createStructuredSelector } from 'reselect';

// c

import Modal from '.';

const mapStateToProps = state => {
  const {modal} = state;
  return {
    deleteItemModal: modal.deleteItemModal,
    addUserModal: modal.addUserModal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Modal);
