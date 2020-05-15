import React from 'react';
import {
  Text,
  // View,
  List,
  // ListItem,
  Container,
  Content,
  // Right,
  // Left,
  // Body,
  Button,
  // Thumbnail,
  Form,
  Item,
  Input,
  View,
} from 'native-base';
import database from '@react-native-firebase/database';
import {StyleSheet} from 'react-native';
// import moment from 'moment';
import * as _ from 'lodash';
import UserItem from '../../components/RTDB/UserItem';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';

import * as modalActions from 'containers/Modal/actions';

// ? CRUD users with FireStore
class UserCRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }
  componentDidMount() {
    // database()
    //   .ref('/Users/1')
    //   .set({
    //     name: 'Ada Lovelace',
    //     age: 31,
    //   })
    //   .then(() => console.log('Data set.'));
    const {userData} = this.state;
    database()
      .ref('/Users')
      .on('value', snapshot => {
        if (userData !== snapshot.val() && snapshot.val() !== null) {
          this.setState({userData: snapshot.val()});
        }
        if (snapshot.val() === null) {
          this.setState({userData: {}});
        }
        console.log('user values', snapshot.val());
      });
  }

  deleteUser(id) {
    database()
      .ref('/Users' + `/${id}`)
      .remove();
  }

  addUser(requestData) {
    const newReference = database()
      .ref('/Users')
      .push();
    console.log('requestData', requestData);
    // newReference.key;
    // console.log('new key', newReference.key);
    // database()
    //   .ref('/Users' + `/${newReference.key}`)
    //   .set({
    //     name: 'test',
    //   })
    //   .then(() => console.log('Data updated.'));
    // newReference.set(requestData).then(() => console.log('Data updated.'));
  }

  render() {
    const {userData} = this.state;
    const {navigation, dispatch} = this.props;
    return (
      <Container style={styles.container}>
        <List>
          {!_.isEqual(userData, {}) ? (
            Object.keys(userData).map((userKey, idx) =>
              userKey ? (
                <UserItem
                  key={idx}
                  userData={_.get(userData, userKey)}
                  navigation={navigation}
                  dispatch={dispatch}
                  userId={idx}
                />
              ) : null,
            )
          ) : (
            <Text style={styles.note}>There is no user to show</Text>
          )}
        </List>

        <Button
          medium
          transparent
          rounded
          style={styles.addUserBtn}
          onPress={() => {
            dispatch(
              modalActions.toggleAddUserModal({
                status: true,
                closeAction: () => {
                  dispatch(modalActions.toggleAddUserModal({status: false}));
                },
                addUserAction: () => {
                  this.addUser();
                },
              }),
            );
          }}>
          <Entypo
            name={'add-user'}
            size={20}
            color="#ffaf40"
            style={{paddingLeft: 10}}
          />
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  addUserBtn: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
    backgroundColor: '#fcfaf7',
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
  },
  note: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 30,
  },
  right: {
    flexDirection: 'row',
  },
  btn: {
    marginRight: 10,
    paddingHorizontal: 7,
  },
  container: {},
  wrapper: {
    backgroundColor: 'green',
  },
  form: {
    width: '100%',
  },
});

export default UserCRUD;
