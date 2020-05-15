import React, {Component} from 'react';

import {View} from 'native-base';
import {StyleSheet} from 'react-native';

import 'react-native-gesture-handler';
import UserCRUD from 'containers/Firebase/screens/RTDB/Injectable.js';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirebaseMain from 'containers/Firebase/screens/Main';

import {Stack} from 'containers/App';

// const FirebaseStack = createStackNavigator();

function Firebase(props) {
  return (
    // <FirebaseStack.Navigator>
    <>
      <Stack.Screen
        name="App/Firebase"
        component={FirebaseMain}
        options={{title: 'Firebase'}}
      />
      <Stack.Screen
        name="App/Firebase/UserCRUD"
        component={UserCRUD}
        options={{title: 'User CRUD'}}
      />
    </>
    // </FirebaseStack.Navigator>
  );
}

export default Firebase;
