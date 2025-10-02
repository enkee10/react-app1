import { useState } from "react"

export function Contador(){
    //Definimos la variable contador  con valor inicial 0
    const [contador, setContador]=useState(0)

    //Funciones para cambiar el estado
    const incrementar = ()=> setContador(contador+1)
    const decrementar = ()=> setContador(contador-1)


    return(
        <div>
            <p>Valor: {contador}</p>
            <button type="button" onClick={incrementar}>+1</button>
            <button type="button" onClick={decrementar}>-1</button>
        </div>
    )
}