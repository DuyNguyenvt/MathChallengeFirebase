import React from 'react';
import {Alert, Modal, StyleSheet} from 'react-native';

import {Button, Text, Form, Input, Item, Content, View} from 'native-base';
import * as _ from 'lodash';

class SharedModal extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  toggleModal() {}
  render() {
    const {
      isModalOpen,
      noteText,
      okText,
      cancelText,
      okAction,
      cancelAction,
    } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          {/* <View style={styles.modalView}>
            <Text style={styles.modalText}>{noteText || 'unknown'}</Text>
            <Button
              style={styles.okButton}
              onPress={() => {
                // this.toggleModal();
                okAction ? okAction() : null;
              }}>
              <Text style={styles.okTextStyle}>{okText || 'unknown'}</Text>
            </Button>
          </View>

          <Button
            style={styles.cancelButton}
            onPress={() => {
              cancelAction ? cancelAction() : null;
              //   this.toggleModal();
            }}>
            <Text style={styles.textStyle}>{cancelText || 'unknown'}</Text>
          </Button> */}
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>Add New User</Text>
            <Form style={styles.form}>
              <Item>
                <Input placeholder="name" />
              </Item>
              <Item>
                <Input placeholder="age" />
              </Item>
            </Form>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingBottom: 30,
    marginTop: 40,
  },
  form: {
    width: '100%',
  },
  modalHeader: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalView: {
    alignItems: 'center',
    // width: '100%',
    // backgroundColor: 'white',
    // borderRadius: 10,
    // justifyContent: 'center',
    // // alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    // marginBottom: 10,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  okTextStyle: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    padding: 10,
  },
  okButton: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'rgba(191, 188, 187, 0.5)',
  },
  cancelButton: {
    width: '100%',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default SharedModal;
