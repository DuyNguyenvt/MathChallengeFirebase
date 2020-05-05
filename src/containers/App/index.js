import React, {Component} from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from 'containers/App/screens/FirstScreen';
import GameScreen from 'containers/App/screens/GameScreen';

// import ResultScreen from 'containers/App/screens/ResultScreen';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      //   <Text>tata </Text>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
