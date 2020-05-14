import React from 'react';
import {Text, ListItem, Right, Left, Body, Button} from 'native-base';
import database from '@react-native-firebase/database';
import {StyleSheet} from 'react-native';
import * as _ from 'lodash';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import * as modalActions from 'containers/Modal/actions';

// ? CRUD users with FireStore
function UserItem(props) {
  const {navigation, dispatch, userData, userId} = props;

  const deleteUser = id => {
    database()
      .ref('/Users' + `/${id}`)
      .remove();
  };

  return (
    <ListItem
      avatar
      onPress={() => {
        navigation.navigate('App/Firebase/UserCRUD');
      }}>
      <Left style={styles.left} />
      <Body style={styles.body}>
        <Text> {_.get(userData, 'name')}</Text>
        <Text note>Age: {_.get(userData, 'age')}</Text>
      </Body>
      <Right style={styles.right}>
        <Button small success style={styles.btn}>
          <AntDesign
            name={'delete'}
            size={16}
            color="white"
            onPress={() => {
              dispatch(
                modalActions.toggleDeleteItemModal({
                  status: true,
                  okAction: () => {
                    deleteUser(userId);
                    dispatch(
                      modalActions.toggleDeleteItemModal({
                        status: false,
                      }),
                    );
                  },
                  cancelAction: () => {
                    dispatch(
                      modalActions.toggleDeleteItemModal({
                        status: false,
                      }),
                    );
                  },
                }),
              );
            }}
          />
        </Button>
        <Button small warning style={styles.btn}>
          <Entypo name={'edit'} size={16} color="white" />
        </Button>
      </Right>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  right: {
    flexDirection: 'row',
  },
  btn: {
    marginRight: 10,
    paddingHorizontal: 7,
  },
});

export default UserItem;
