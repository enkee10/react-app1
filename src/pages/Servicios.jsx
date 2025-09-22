function Servicios() {
  const servicios = ["Salud veterinaria", "Entrenamiento", "Cuidado personal"];

  return (
    <div>
      <h1>Servicios</h1>
      <ul>
        {servicios.map((servicio, index) => (
          <li key={index}>{servicio}</li>
        ))}
      </ul>
    </div>
  );
}

export default Servicios;
