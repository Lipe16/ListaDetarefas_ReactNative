import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionButton from './ActionButton';
import CampoTarefa from './CampoTarefa';

class Tarefa extends React.Component {


  constructor(props){
    super(props);

    this.state={
      editando:false,
      tarefaEditada: props.tarefa.texto,
      tarefaError:null,
    }

    this.cancelEditOnPress = this.cancelEditOnPress.bind(this);
    this.editOnPress = this.editOnPress.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onUpdatePress = this.onUpdatePress.bind(this);
    this.onDeleteTarefaPress = this.onDeleteTarefaPress.bind(this);

  }

  editOnPress(){
    this.setState({editando: true});
  }

  cancelEditOnPress(){
    this.setState({editando: false});
  }


  onChangeText(text){
    this.setState({tarefaEditada: text});
    this.setState({tarefaError: null});
  }

  onUpdatePress(){
    this.props.onUpdateTarefa({id: this.props.tarefa.id, texto: this.state.tarefaEditada})
    .then(tarefaAtualizada => {
        this.setState({editando: false});
    });
  }

  onDeleteTarefaPress(){
    this.props.onDeleteTarefa({id: this.props.tarefa.id, texto: this.state.tarefaEditada});
        this.setState({editando: false});

  }

  render(){

    if(this.state.editando){
          return(
            <View style={styles.tarefaContainer}>
              <View style={{flex: 3}}>
                  <CampoTarefa
                      value={this.state.tarefaEditada}
                      onChangeText={this.onChangeText}
                      error={!!this.state.tarefaError}
                  />
              </View>
              <View style={{flex: 1, flexDirection:'row'}}>
                  <ActionButton content="✔" onPress={this.onUpdatePress} />
                  <ActionButton content="↶" onPress={this.cancelEditOnPress} />
              </View>
            </View>
        );
    }

    return(
        <View style={styles.tarefaContainer}>
          <Text style={styles.tarefaTexto}>• {this.props.tarefa.texto}</Text>
          <ActionButton content="✎" onPress={this.editOnPress} />
          <ActionButton content="✖️" onPress={this.onDeleteTarefaPress} />
        </View>
    );
  }

}


const styles = StyleSheet.create({
  tarefaContainer: {
    marginBottom: 6,
    flexDirection: 'row'
  },
  tarefaTexto: {
    fontSize: 16,
  }
});



export default Tarefa;
