function TaskAdicionar(){
    return(
        <form action="" className="inputs-box rounded-3 bg-light bg-gradientent p-4 row row-gap-3 mb-4">
            <input className="p-2 rounded-2" type="text" placeholder="Título da tarefa" />
            <input className="p-2 rounded-2" type="text" placeholder="Descrição da tarefa" />
            <input className="p-2 rounded-2 bg-info-subtle btn-submit" type="submit" value="Adicionar" />
        </form>
    )

}

export default TaskAdicionar; 