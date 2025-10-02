import { useState, useEffect } from "react";

export function Pokemon(){

    const[listPokemon, setList] = useState([])

    useEffect(()=>{
       const fetchPockemons = async()=>{
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        const data = await res.json()
        setList(data.results)
       }
       
    fetchPockemons()

    },[])

   //console.log(listPokemon)

    return(
        <div>
            <ul>
                {
                    listPokemon.map((poke, index)=>
                    <li key={index}>{poke.name}</li>
                    )
                }
            </ul>
        </div>
    )
}