export const fetchTarefas = ()=> {

  return fetch('http://192.168.2.103:3000/tarefas')
  .then(
    response =>{
      return response.json()
    });
};

export const createTarefa = (tarefa)=> {
  return fetch('http://192.168.2.103:3000/tarefas',{
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'},
      body:JSON.stringify(tarefa)
  }).then(response => response.json());

};


export const updateTarefa = (tarefa)=> {
  return fetch(`http://192.168.2.103:3000/tarefas/${tarefa.id}`,{
    method:'PUT',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'},
      body:JSON.stringify(tarefa)
  }).then(response => response.json());

};

export const deleteTarefa = (tarefa)=> {
  return fetch(`http://192.168.2.103:3000/tarefas/${tarefa.id}`,{
    method:'DELETE',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'},
  });

};
