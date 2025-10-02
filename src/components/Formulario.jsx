import { useState } from "react";

export function Formulario(){
    const [texto, setTexto] = useState("")

    const manejarCambio = (e)=>{
        setTexto(e.target.value)
    }

    const manejarSubmit =  (e)=>{
        e.preventDefault()
        alert("Has escrito: " + texto);
    }

    return(
        <div>
            <form onSubmit={manejarSubmit}>
                <input type="text" value={texto} onChange={manejarCambio}/>
                <button type="submit">Enviar</button>
            </form>
            <p>Texto actual: {texto}</p>
        </div>
    )
}