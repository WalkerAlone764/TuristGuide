import React from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';

function HomeScreen() {
  // StatusBar.setBackgroundColor('blue');
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default HomeScreen;
