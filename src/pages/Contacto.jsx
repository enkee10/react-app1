function Contacto() {
  return (
    <div>
      <h1>Contacto</h1>
      <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}>
        <label>Nombre</label>
        <input type="text" name="nombre" />

        <label>Email</label>
        <input type="email" name="email" />

        <label>Mensaje</label>
        <textarea name="mensaje"></textarea>

        <button type="submit" style={{ marginTop: "10px" }}>Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
