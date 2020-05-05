import React, {Component} from 'react';
import {Body, Button, Footer, Left, Right, View, Text} from 'native-base';
// import {StyleSheet, Text, Button, View} from 'react-native';
import {StyleSheet, ImageBackground} from 'react-native';
import ImageIcon from 'assets/AppAsset/math.jpg';

class FirstScreen extends Component {
  render() {
    console.log('first screen props', this.props);
    const {navigation} = this.props;
    return (
      <View style={styles.container || {}}>
        <ImageBackground source={ImageIcon} style={styles.background} />
        <View style={styles.innerContainer}>
          <Button
            style={styles.playBtn}
            onPress={() => {
              navigation.navigate('App/Game');
            }}>
            <Text style={styles.textBtn}> Let's start game</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  playBtn: {
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingHorizontal: 50,
    alignSelf: 'flex-end',
    marginBottom: 40,
  },
  textBtn: {
    fontSize: 25,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  innerContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default FirstScreen;
