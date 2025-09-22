function Inicio() {
  const animales = [
    { nombre: "Perro", img: "https://place-puppy.com/200x200" },
    { nombre: "Gato", img: "https://placekitten.com/200/200" },
    { nombre: "Conejo", img: "https://placebear.com/200/200" },
    { nombre: "Pájaro", img: "https://loremflickr.com/200/200/bird" },
    { nombre: "Pez", img: "https://loremflickr.com/200/200/fish" },
  ];

  return (
    <div>
      <h1>Animales</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {animales.map((animal, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img src={animal.img} alt={animal.nombre} width="150" />
            <p>{animal.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
