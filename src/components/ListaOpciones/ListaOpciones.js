import styles from "./ListaOpciones.module.css"

function ListaOpciones({titulo, placeholder, nombre}) {

    const categorias = [
        "Front End",
        "Back End",
        "Inovación y Gestión"
    ]

    { categorias.map( (categoria, index) => {
        return <option key={index}>{categoria}</option>
    } ) }


    return (
        <div className={styles.listaOpciones}>
            <label>{titulo}</label>
            <select className={styles.listaOpciones} placeholder={placeholder}>
                { categorias.map( (categoria, index) => {
                    return <option key={index}>{categoria}</option>
                } ) }
            </select>
            console.log(categoria);
        </div>
    )
    
}

export default ListaOpciones