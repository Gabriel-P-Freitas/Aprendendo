function Tasks({tasks, onTaskClick, onDeleteTaskClick}){
    
    console.log()
    return(
        <div className="rounded-lg bg-slate-400 p-6 flex flex-col gap-y-3">
            {tasks.map((task) => (
                <button key={task.id} className={'no-underline rounded justify-between flex gap-x-4 text-slate-50 ${task.isCompleted && "text-clicado"}'}>
                    <p onClick={() => onTaskClick(task.id)} className={'px-2 py-2 bg-info-subtle bg-slate-600  flex-1 rounded text-start fw-medium ${task.isCompleted && "text-clicado"}'}> 
                        {task.isCompleted ? <i className="fa-solid fa-square-check me-2"></i> : <i className="me-2 fa-regular fa-square"></i>}
                        {task.title}
                        
                    </p>
                    <button className="border-0 bg-info-subtle px-4 bg-slate-600 py-2 rounded">
                        <i className="fa-solid fa-angle-right text-dark"></i>
                    </button>
                    <button onClick={() => onDeleteTaskClick(task.id)} className="border-0 bg-info-subtle px-3 bg-slate-600 py-2 rounded">
                        <i className="fa-solid fa-trash text-dark"></i>
                    </button>
                </button>
            ))
                
            }
        </div>
    )
}

export default Tasks;