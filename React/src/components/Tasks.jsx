function Tasks(props){
    console.log(props)
    return(
        <div className="rounded-lg bg-slate-400 p-6 flex flex-col gap-y-3">
            {props.tasks.map((task) => (
                <button key={task.id} className={'no-underline rounded justify-between flex gap-x-4 text-slate-50 ${task.isCompleted && "text-red-700"}'}>
                    <p onClick={() => props.onTaskClick(task.id)} className={'px-2 py-2 bg-info-subtle bg-slate-600  flex-1 rounded text-start fw-medium ${task.isCompleted && "text-red-700"}'}> 
                        {task.title}
                        {/* {task.isCompleted ? "COMPLETE" : "INCOMPLETE"} */}
                        
                    </p>
                    <button className="border-0 bg-info-subtle px-4 bg-slate-600 py-2 rounded">
                        <i className="fa-solid fa-angle-right text-dark"></i>
                    </button>
                </button>
                
                // <a key={task.id} className="text-decoration-none d-flex column-gap-3 text-dark" href="">
                //     <p className="px-2 py-2 rounded-2  bg-info-subtle flex-fill text-start fw-medium">
                //         {task.title}
                //     </p>
                //     <button className="border-0 px-3 py-2 rounded-2  bg-info-subtle">
                //         <i className="fa-solid fa-angle-right text-dark"></i>
                //     </button>
                // </a>
                
                // <a key={task.id} className="text-decoration-none d-flex column-gap-3 text-dark" href="">
                //     <p className="px-2 py-2 rounded-2  bg-info-subtle flex-fill text-start fw-medium">
                //         {task.title}
                //     </p>
                //     <button className="border-0 px-3 py-2 rounded-2  bg-info-subtle">
                //         <i className="fa-solid fa-angle-right text-dark"></i>
                //     </button>
                // </a>
            ))
                
            }
        </div>
    )
}

export default Tasks;