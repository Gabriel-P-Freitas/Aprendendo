import { useState } from "react";
import TaskAdicionar from "./components/TaskAdicionar";
import Tasks from "./components/tasks";



function App(){
  const [tasks, setTasks] = useState([
    {
      'id': 1,
      'title': 'Estudar React',
      'description': 'Quero estudar react para me tornar um desenvolvedor Full Stack  ',  
      iscompleted: false,
      
    },
    {
      'id': 2,
      'title': 'Estudar Tailwind CSS',
      'description': 'Quero estudar Tailwind para me tornar um desenvolvedor Full Stack sem escrever CSS',  
      iscompleted: false,
    },
    {
      'id': 3,
      'title': 'Estudar TypeScript',
      'description': 'Quero estudar TypeScript para integrar com o meu react.jsx',  
      iscompleted: false,
    }
  ]);

  return(
    <div className="box container text-center" id="root">
      <h1 className="py-4">Gerenciador de Tarefas</h1>
      <TaskAdicionar/>
      <Tasks tasks={tasks}/>
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
