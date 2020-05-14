import React from 'react';
import RemoveItemModal from 'containers/Modal/components/RemoveItemModal';
import AddUserModal from 'containers/Modal/components/AddUserModal';

function Modal(props) {
  const {deleteItemModal, addUserModal} = props;
  console.log('modal props', props);
  return (
    <>
      <RemoveItemModal context={deleteItemModal} />
      <AddUserModal context={addUserModal} />
    </>
  );
}

export default Modal;
