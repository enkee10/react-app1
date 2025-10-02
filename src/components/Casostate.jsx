import { useState } from "react";

export function CasoState() {
  const [segundos, setSegundos] = useState(0);

  const sumarCincoDirecto = () => {
    // Cada línea "ve" el mismo valor de segundos
    setSegundos(segundos + 1);
    setSegundos(segundos + 1);
    setSegundos(segundos + 1);
    setSegundos(segundos + 1);
    setSegundos(segundos + 1);
  };

  const sumarCincoConFuncion = () => {
    // Cada línea recibe el valor más actualizado
    setSegundos((s) => s + 1);
    setSegundos((s) => s + 1);
    setSegundos((s) => s + 1);
    setSegundos((s) => s + 1);
    setSegundos((s) => s + 1);
  };

  return (
    <div>
      <h2>Segundos: {segundos}</h2>
      <button onClick={sumarCincoDirecto}>+5 directo</button>
      <button onClick={sumarCincoConFuncion}>+5 con función</button>
    </div>
  );
}
