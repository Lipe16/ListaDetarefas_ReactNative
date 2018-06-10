import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return(
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#fff'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize:16
  }
});

export default Header;
