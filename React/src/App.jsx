// import { useState } from "react";
import TaskAdicionar from "./components/TaskAdicionar";
import Tasks from "./components/tasks";
import TaskAddTw from "./components-tw/TaskAddTw";
import TaskTw from "./components-tw/TasksTw";

function App(){
  return(
    <div className="box container text-center" id="root">
      <h1 className="py-4">Gerenciador de Tarefas</h1>
      <TaskAddTw/>
      <TaskTw/>
      {/* <TaskAdicionar/>
      <Tasks/> */}
    </div>
  );
}
  
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
