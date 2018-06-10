import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';

import CampoTarefa from './CampoTarefa';
import ActionButton from './ActionButton';

const NovaTarefa = (props) => {
  return(
    <View>
      <View style={styles.principal}>
         <View style={styles.tarefa}>
              <CampoTarefa
                  value={props.value}
                  onChangeText={props.onChangeText}
                  onTarefaADD={props.onTarefaADD}
                  error={!!props.error}
              />
          </View>

          <View style={styles.button}>
              <ActionButton content={'+'} onPress={props.onTarefaADD} />
          </View>
      </View>

      {props.error ? <Text style={styles.error}> {props.error } </Text> : null}

    </View>
  );
};

const styles = StyleSheet.create({
  error:{
    color: 'red',
  },
  principal:{
    flexDirection: 'row'
  },
  tarefa:{
    flex:7,

  },
  button:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default NovaTarefa;
