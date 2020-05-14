import React, {Component} from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from 'containers/App/screens/FirstScreen';
import GameScreen from 'containers/App/screens/GameScreen';
import Modal from 'containers/Modal/Injectable';
import FirebaseNavigator from 'containers/Firebase';

// import ResultScreen from 'containers/App/screens/ResultScreen';

export const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('check store', this.props);
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="App/Firebase/UserCRUD">
            <Stack.Screen
              name="App/Home"
              component={FirstScreen}
              options={{title: 'Home'}}
            />
            <Stack.Screen
              name="App/Game"
              component={GameScreen}
              options={{title: 'Game'}}
            />
            {FirebaseNavigator()}
          </Stack.Navigator>
        </NavigationContainer>
        <Modal />
      </>
    );
  }
}

export default App;

{
  /* <Stack.Screen
            name="App/Firebase"
            component={Firebase}
            options={{
              title: 'Firebase',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          /> */
}
