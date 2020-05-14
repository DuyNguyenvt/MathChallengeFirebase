/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Root, StyleProvider} from 'native-base';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'configs/configureStore';
import {View} from 'native-base';
// import {Provider} from 'react-redux';

import AppMathChallenge from 'containers/App';

class App extends React.Component {
  render() {
    console.log('this - check store', store);
    return (
      <>
        <Provider store={store}>
          {/* <PersistGate persistor={persistor}> */}
          {/* <StyleProvider> */}
          {/* <Root> */}
          {/* <EngageApp /> */}
          <AppMathChallenge />
          {/* </Root> */}
          {/* </StyleProvider> */}
          {/* </PersistGate> */}
        </Provider>
      </>
    );
  }
}

export default App;
