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
        noteText="This item will not be able to restore after being deleted."
        okText="Delete"
        cancelText="Cancel"
        okAction={_.get(context, 'okAction')}
        cancelAction={_.get(context, 'cancelAction')}
      />
    );
  }
}

export default AddUserModal;
