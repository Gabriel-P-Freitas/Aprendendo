function TaskAdicionar(){
    return(
        <form action="" className="inputs-box rounded-lg bg-slate-400 text-slate-950 bg-gradientent p-6 flex flex-col gap-y-3 mb-6">
            <input className="p-2 rounded" type="text" placeholder="Título da tarefa" />
            <input className="p-2 rounded" type="text" placeholder="Descrição da tarefa" />
            <input className="p-2 rounded bg-slate-600 text-slate-50 bg-info-subtle cursor-pointer btn-submit" type="submit" value="Adicionar" />
        </form>
    )

}

export default TaskAdicionar; 