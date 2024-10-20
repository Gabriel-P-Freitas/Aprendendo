function Tasks(props){
    console.log(props)
    return(
        <div className="rounded-3 bg-light bg-gradientent p-4 row row-gap-3">
            <a className="text-decoration-none d-flex column-gap-3 text-dark" href=""><p className="px-2 py-2 rounded-2  bg-info-subtle flex-fill text-start fw-medium"> {props.tasks[0].title} </p><button className="border-0 px-3 py-2 rounded-2  bg-info-subtle"><i className="fa-solid fa-angle-right text-dark"></i></button></a>
            
            <a className="text-decoration-none d-flex column-gap-3 text-dark" href=""><p className="px-2 py-2 rounded-2  bg-info-subtle flex-fill text-start fw-medium">{props.tasks[1].title}</p><button className="border-0 px-3 py-2 rounded-2  bg-info-subtle"><i className="fa-solid fa-angle-right text-dark"></i></button></a>
            
            <a className="text-decoration-none d-flex column-gap-3 text-dark" href=""><p className="px-2 py-2 rounded-2  bg-info-subtle flex-fill text-start fw-medium">{props.tasks[2].title}</p><button className="border-0 px-3 py-2 rounded-2  bg-info-subtle"><i className="fa-solid fa-angle-right text-dark"></i></button></a>
        </div>
    )
}

export default Tasks;