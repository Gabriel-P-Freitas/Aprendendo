function Tasks(){
    return(
        <div className="rounded-3 bg-light bg-gradientent p-4 row row-gap-3">
            <a className="text-decoration-none d-flex column-gap-3 text-dark" href=""><p className="px-2 py-2 rounded-2  bg-info-subtle flex-fill text-start fw-medium">Estudar React</p><button className="border-0 px-3 py-2 rounded-2  bg-info-subtle"><i className="fa-solid fa-angle-right text-dark"></i></button></a>
            
            <a className="text-decoration-none d-flex column-gap-3 text-dark" href=""><p className="px-2 py-2 rounded-2  bg-info-subtle flex-fill text-start fw-medium">Estudar Tailwind CSS</p><button className="border-0 px-3 py-2 rounded-2  bg-info-subtle"><i className="fa-solid fa-angle-right text-dark"></i></button></a>
            
            <a className="text-decoration-none d-flex column-gap-3 text-dark" href=""><p className="px-2 py-2 rounded-2  bg-info-subtle flex-fill text-start fw-medium">Estudar TypeScript</p><button className="border-0 px-3 py-2 rounded-2  bg-info-subtle"><i className="fa-solid fa-angle-right text-dark"></i></button></a>
        </div>
    )
}

export default Tasks;