import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Tarefa from './Tarefa';

const ListaTarefas = (props) => {

  const tarefas =
    props.tarefas.map(
      tarefa => (
          <Tarefa onUpdateTarefa={props.onUpdateTarefa} onDeleteTarefa={props.onDeleteTarefa} key={tarefa.id} tarefa={tarefa}/>
      )
    );



  return(
    <View style={styles.listaTarefasContainer}>
        {tarefas}
    </View>
  )
}

const styles = StyleSheet.create({
  listaTarefasContainer: {
    flex: 1
  },
});

export default ListaTarefas;
