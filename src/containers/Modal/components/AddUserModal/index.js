import React from 'react';
import FullScreenModal from 'components/modal/FullScreenModal';
import * as _ from 'lodash';

class AddUserModal extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {context} = this.props;

    return (
      <FullScreenModal
        isModalOpen={_.get(context, 'status')}
        title="Add New User"
        closeAction={_.get(context, 'closeAction')}
        bodyContent={_.get(context, 'bodyContent')}
        addUserAction={_.get(context, 'addUserAction')}
      />
    );
  }
}

export default AddUserModal;
