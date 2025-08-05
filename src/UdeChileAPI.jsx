import React, { useEffect, useState } from "react";

// Cambie los datos a datos planos pq teenia problemas con cors y tampoco m funciono el proxy backend:(
const DATOS_URL = "https://cdn.jsdelivr.net/gh/kadhaDeemi/datos-porfatolio/partidos_udechile.json";

export default function ApiUdeChile() {
  const [racha, setRacha] = useState([]);
  const [proximo, setProximo] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(DATOS_URL)
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar el archivo de datos');
        return res.json();
      })
      .then(data => {
        setProximo(data.proximo_partido);
        setRacha(data.ultimos_resultados);
      })
      .catch(err => {
        console.error("Error al cargar datos:", err);
        setError("No se pudieron cargar los datos.");
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  const colorResultado = (tipo) => {
    if (tipo === "W") return "text-green-500";
    if (tipo === "D") return "text-yellow-400";
    if (tipo === "L") return "text-red-500";
    return "text-white";
  };

  if (cargando) {
    return <div className="text-center text-gray-400">Cargando...</div>;
  }
  
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="relative w-full text-white flex flex-col items-center justify-center rounded-lg">
      {/* Últimos 5 partidos */}
      <div className="text-xs text-gray-300 w-full flex flex-col items-start">
        <div className="flex gap-2">
          {racha && racha.length > 0 ? (
            racha.map((r, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className={`font-bold text-xs ${colorResultado(r.tipo)}`}>
                  {r.tipo}
                </span>
                <span className="text-[10px] text-gray-200 font-semibold">{r.marcador}</span>
              </div>
            ))
          ) : (
            <span>No hay resultados recientes.</span>
          )}
        </div>
      </div>

      {/* Próximo partido con logos */}
      <div className="text-center">
        {proximo ? (
          <>
            <h2 className="text-sm font-bold mb-2">PRÓXIMO PARTIDO</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-col items-center gap-1 w-20 text-center">
                <img
                  src={proximo.logoLocal}
                  alt={proximo.equipoLocal}
                  className="w-10 h-10"
                />
                <span className="text-xs font-semibold truncate">{proximo.equipoLocal}</span>
              </div>
              
              <span className="text-lg font-bold text-gray-300">vs</span>

              <div className="flex flex-col items-center gap-1 w-20 text-center">
                <img
                  src={proximo.logoVisita}
                  alt={proximo.equipoVisita}
                  className="w-10 h-10"
                />
                <span className="text-xs font-semibold truncate">{proximo.equipoVisita}</span>
              </div>
            </div>
            <p className="text-gray-300 text-xs font-semibold">{proximo.fecha_str}</p>
          </>
        ) : (
          <p>Cargando próximo partido...</p>
        )}
      </div>
    </div>
  );
}
