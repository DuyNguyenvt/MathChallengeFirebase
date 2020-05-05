import React from 'react';

import {View, Text} from 'native-base';
import {StyleSheet} from 'react-native';

function CountDownBar({percent, color}) {
  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <View style={{...styles.innerBar, width: `${percent}%`}} />
      </View>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'gray',
    height: 20,
    width: '90%',
    borderRadius: 40,
  },
  innerBar: {
    backgroundColor: '#fad390',
    height: 20,
    width: '100%',
    borderRadius: 40,
  },
});

export default CountDownBar;
