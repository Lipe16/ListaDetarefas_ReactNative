import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

const CampoTarefa = (props) => {
  const textinputStyle = [styles.edText];
  if(props.error){
    textinputStyle.push(styles.error);
  }

  return(
    <View >
      <TextInput style={textinputStyle} maxLength={30} value={props.value} onChangeText={props.onChangeText} />
    </View>
  );
};

const styles = StyleSheet.create({
  edText:{
    backgroundColor:'#fff',
    borderWidth:1,
    borderRadius:3,
    padding: 6,
  },
  error:{
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
  }
});

export default CampoTarefa;
