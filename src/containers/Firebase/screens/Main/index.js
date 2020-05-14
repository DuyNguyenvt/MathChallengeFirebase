import React from 'react';

import {
  Container,
  Text,
  Button,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from 'native-base';

import {StyleSheet} from 'react-native';

import FireStoreLogo from 'assets/AppAsset/FireStoreLogo.png';

class FirebaseScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <List>
            <ListItem
              avatar
              onPress={() => {
                navigation.navigate('App/Firebase/UserCRUD');
              }}>
              <Left style={styles.left}>
                <Thumbnail style={styles.thumbnail} source={FireStoreLogo} />
              </Left>
              <Body style={styles.body}>
                <Text>Users Management</Text>
                <Text note>CRUD user with firestore</Text>
              </Body>
              <Right style={styles.right}>
                <Text note> updated: 13/5/20</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  left: {
    flex: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  thumbnail: {
    flex: 1,
    backgroundColor: '#badc58',
  },
  body: {
    flex: 3,
  },
  right: {
    flex: 1,
  },
});

export default FirebaseScreen;
