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
} from 'native-base';
import database from '@react-native-firebase/database';
import {StyleSheet} from 'react-native';
// import moment from 'moment';
import * as _ from 'lodash';
import UserItem from '../../components/RTDB/UserItem';
import Entypo from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';

import * as modalActions from 'containers/Modal/actions';

// ? CRUD users with FireStore
class UserCRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
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
          this.setState({userData: []});
        }
        console.log('user values', snapshot.val());
      });
  }

  deleteUser(id) {
    database()
      .ref('/Users' + `/${id}`)
      .remove();
  }

  render() {
    const {userData} = this.state;
    const {navigation, dispatch} = this.props;
    return (
      <Container>
        <Content>
          <List>
            {userData.map((user, idx) =>
              user ? (
                <UserItem
                  key={idx}
                  userData={user}
                  navigation={navigation}
                  dispatch={dispatch}
                  userId={idx}
                />
              ) : null,
            )}
          </List>
          <Content
            justifyContent="center"
            alignItems="flex-end"
            paddingRight={10}
            marginTop={20}>
            <Button
              medium
              primary
              onPress={() => {
                dispatch(modalActions.toggleAddUserModal({status: true}));
              }}>
              <Entypo
                name={'add-user'}
                size={20}
                color="white"
                style={{paddingLeft: 10}}
              />
              <Text style={styles.check}>Add User</Text>
            </Button>
          </Content>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'green',
  },
  left: {},
  body: {},
  right: {
    flexDirection: 'row',
  },
  btn: {
    marginRight: 10,
    paddingHorizontal: 7,
  },
});

export default UserCRUD;
