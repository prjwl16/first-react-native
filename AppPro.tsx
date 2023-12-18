import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

function AppPro(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        {' '}
        Hello World!!{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  blackText: {
    color: '#000',
  },
});

export default AppPro;
