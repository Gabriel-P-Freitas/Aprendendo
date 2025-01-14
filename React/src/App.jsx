import { useState } from "react";
import TaskAdicionar from "./components/TaskAdicionar";
import Tasks from "./components/tasks";



function App(){
  const [tasks, setTasks] = useState([
    {
      'id': 1,
      'title': 'Estudar React',
      'description': 'Quero estudar react para me tornar um desenvolvedor Full Stack  ',  
      isCompleted: false,
      
    },
    {
      'id': 2,
      'title': 'Estudar Tailwind CSS',
      'description': 'Quero estudar Tailwind para me tornar um desenvolvedor Full Stack sem escrever CSS',  
      isCompleted: false,
    },
    {
      'id': 3,
      'title': 'Estudar TypeScript',
      'description': 'Quero estudar TypeScript para integrar com o meu react.jsx',  
      isCompleted: false,
    }
  ]);
  function onTaskClick(taskId){
    const newTasks = tasks.map(task =>{
      if (task.id == taskId){
        return{
          ...task, isCompleted : !task.isCompleted
        }
      }
      return task;
    })
    setTasks(newTasks);

  }

  return(
    <div className="box py-12 container mx-auto text-center" id="root">
      <h1 className="text-3xl py-4">Gerenciador de Tarefas</h1>
      <TaskAdicionar/>
      <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
    </div>
  );
};
  
export default App
  
  // const [message, setMessage] = useState("Olá Mundo!")
  // //Stats (Estado)

  // return(
  //   <div>
  //     <h1>{message}</h1>
  //     <button onClick={() =>{
  //       setMessage('Olá, fui clicado')
  //     }}>Mudar mensagem</button>
  //   </div>
  // )
