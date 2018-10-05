import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-360';

export default class Tommy360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        {/* <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View> */}
        <Image
          style={styles.imagebox}
          source={require('./static_assets/360_lassen.jpg')}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  imagebox: {
    width:100,
    height:100,
  },
});

AppRegistry.registerComponent('Tommy360', () => Tommy360);
AppRegistry.registerComponent('Panel', () => Panel)
