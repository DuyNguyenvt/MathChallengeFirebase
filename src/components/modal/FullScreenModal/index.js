import React from 'react';
import {Alert, Modal, StyleSheet} from 'react-native';

import {
  Button,
  Text,
  Form,
  Input,
  Item,
  Content,
  View,
  Left,
  Right,
} from 'native-base';
import * as _ from 'lodash';
import AntDesign from 'react-native-vector-icons/AntDesign';

class FullScreenModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        age: '',
      },
    };
  }

  toggleModal() {}

  setFieldValue(path, value) {
    const cloneFormData = {...this.state.formData};
    _.set(cloneFormData, path, value);
    this.setState({formData: cloneFormData});
  }

  render() {
    const {isModalOpen, title, closeAction, addUserAction} = this.props;
    const {formData} = this.state;
    console.log('form data', this.state.formData);
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.toolBar}>
              <Left>
                <Button
                  small
                  transparent
                  onPress={() => {
                    closeAction ? closeAction() : null;
                  }}>
                  <AntDesign name="close" size={25} />
                </Button>
              </Left>
            </View>
            <Text style={styles.modalHeader}>{title || ''}</Text>
            <Form style={styles.form}>
              <Item>
                <Input
                  placeholder="name"
                  onChangeText={value => this.setFieldValue('name', value)}
                />
              </Item>
              <Item>
                <Input
                  placeholder="age"
                  onChangeText={value => this.setFieldValue('age', value)}
                />
              </Item>
            </Form>
            <View style={styles.footerWrapper}>
              <Button style={styles.confirmAddUserBtn}>
                <Text
                  style={styles.confirmAddUserBtn_text}
                  onPress={() => {
                    addUserAction && addUserAction(formData);
                  }}>
                  Add New User
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  toolBar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
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
  footerWrapper: {
    marginTop: 30,
    width: '100%',
    alignItems: 'flex-end',
  },
  confirmAddUserBtn: {
    backgroundColor: '#ffaf40',
  },
  confirmAddUserBtn_text: {
    fontWeight: 'bold',
  },
});

export default FullScreenModal;
