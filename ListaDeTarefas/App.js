import React from 'react';
import {ScrollView, StyleSheet, Text, View, Platform, StatusBar, Button } from 'react-native';


import Header from './components/Header';
import ListaTarefas from './components/ListaTarefas';
import {fetchTarefas, createTarefa, updateTarefa, deleteTarefa} from './api/index'
import NovaTarefa from './components/NovaTarefa';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      tarefas: null,
      tarefasCarregando: false,
      tarefasErro: null,
      tarefaNova: '',
      tarefaNovaErro: null
    };

    this.onTentarNovamentePress = this.onTentarNovamentePress.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onTarefaADD = this.onTarefaADD.bind(this);
    this.onUpdateTarefa = this.onUpdateTarefa.bind(this);
    this.onDeleteTarefa = this.onDeleteTarefa.bind(this);
  }

  componentDidMount(){
      this.fetchData();
  }

  onTentarNovamentePress(){
      this.fetchData();
  }

  /* listar tarefas */
  fetchData(){
    this.setState({tarefasCarregando: true, tarefasErro: null}, ()=>
      {
        this.props.fetchTarefas()
          .then(tarefas => {
            this.setState({
                tarefas,
                tarefasCarregando: false
            });
        })
        .catch(error => {

          this.setState({tarefasErro:`Houve um erro:  ${error.message}` });
        })
      });
  }
  // listar tarefas fim

// adicionar texto da tarefa ao state
  onChangeText(text){
    this.setState({tarefaNova: text});
    this.setState({tarefaNovaErro: null});
  }


  //adicionar tarefa
  onTarefaADD(){
    if(this.state.tarefaNova.length > 0){
        this.props.createTarefa({texto: this.state.tarefaNova})
        .then(resposta => {
          this.setState({tarefas: this.state.tarefas.concat(resposta), tarefaNova: ''})
        })
        .catch(error => {

          this.setState({tarefaNovaErro:`Houve um erro:  ${error.message}` });
        });

    }else{
      this.setState({tarefaNovaErro: 'A nova tarefa precisa de um texto!'});
    }

  }

//atualizar tarefa
  onUpdateTarefa(tarefa){
    return this.props.updateTarefa(tarefa)
    .then(tarefaAtualizada =>{
      console.log(tarefa);
        const listaAtualizada = this.state.tarefas.map(tarefa => {
            if(tarefa.id == tarefaAtualizada.id){
              return tarefaAtualizada;
            }
            else{
              return tarefa;
            }
          }
        );
        this.setState({tarefas: listaAtualizada});
        return tarefaAtualizada;
    });
  }

  //atualizar tarefa
    onDeleteTarefa(tarefa){
      return this.props.deleteTarefa(tarefa)
      .then(() =>{

          const listaAtualizada = this.state.tarefas.filter(filterTarefa => filterTarefa.id != tarefa.id );
          this.setState({tarefas: listaAtualizada});
      });
    }




  renderListaTarefas(){

    if(this.state.tarefas){//lista de tarefas
      return <ListaTarefas tarefas={this.state.tarefas} onUpdateTarefa={this.onUpdateTarefa} onDeleteTarefa={this.onDeleteTarefa} />
    }
    if(this.state.tarefasErro){//em caso de erro
        return (
            <View>
                <Text style={{color:'#ff0000'}}>{this.state.tarefasErro}</Text>
                <Button onPress={this.onTentarNovamentePress} title="Tentar novamente" />
            </View>
             );
    }
    return <Text>Carregando...</Text>
  }

  render() {
    console.log(this.props);
    return (
      <ScrollView style={styles.container}>
        <Header>Lista</Header>

        <View style={styles.main} >

          <NovaTarefa
              value={this.state.tarefaNova}
              onChangeText={this.onChangeText}
              onTarefaADD={this.onTarefaADD}
              error={this.state.tarefaNovaErro}
          />

          {this.renderListaTarefas()}

        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
    backgroundColor:'#dedede'
  },
  main:{
    flex: 1,
    padding: 12,

  }
});


export default (props) =>{
  return <App {...props} fetchTarefas={fetchTarefas} createTarefa={createTarefa} updateTarefa={updateTarefa} deleteTarefa={deleteTarefa}/>;
}
