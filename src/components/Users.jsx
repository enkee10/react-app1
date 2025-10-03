import { useState, useEffect } from "react";

export function Users() {
    const [usuarios, setUsuarios] = useState(() => {
        const guardados = localStorage.getItem("usuarios");
        return guardados ? JSON.parse(guardados) : [];
    })
    const [nuevoUsuario, setNuevoUsuario] = useState("");

    useEffect(() => {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }, [usuarios]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevoUsuario.trim() === "") return;
        setUsuarios([...usuarios, nuevoUsuario]);
        setNuevoUsuario("");
    };

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nuevoUsuario}
                    onChange={(e) => setNuevoUsuario(e.target.value)}
                    placeholder="Ingresa un usuario"
                />
                <button type="submit">Agregar</button>
            </form>

            <ul>
                {usuarios.map((usuario, index) => (
                    <li key={index}>{usuario}</li>
                ))}
            </ul>
        </div>
    );
}
