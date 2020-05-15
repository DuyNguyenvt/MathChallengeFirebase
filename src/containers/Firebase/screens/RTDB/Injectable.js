import {connect} from 'react-redux';
import {compose} from 'redux';
// import { createStructuredSelector } from 'reselect';

// c

import UserCRUD from '.';

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

const withConnect = connect(mapDispatchToProps);

export default compose(withConnect)(UserCRUD);
