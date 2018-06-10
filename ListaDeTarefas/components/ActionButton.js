import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';

const ActionButton = (props) => {
  return(
              <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
                <Text> {props.content} </Text>
              </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable:{
    backgroundColor:'#fff',
    borderRadius: 1,
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:5
  }
});

export default ActionButton;
