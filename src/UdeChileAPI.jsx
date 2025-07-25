import { useEffect, useState } from "react";

export default function ApiUdeChile() {
  const [racha, setRacha] = useState([]);
  const [proximo, setProximo] = useState(null);

  useEffect(() => {
    // Últimos 5 partidos
    fetch("https://api.sofascore.com/api/v1/team/3161/events/last/0")
      .then((res) => res.json())
      .then((data) => {
        const partidosOrdenados = data.events.sort(
          (a, b) => b.startTimestamp - a.startTimestamp
        );

        const ultimos5Partidos = partidosOrdenados.slice(0, 5).map((partido) => {
          const esLocal = partido.homeTeam.id === 3161;
          const golesLocal = partido.homeScore.current ?? 0;
          const golesVisita = partido.awayScore.current ?? 0;

          let resultado;
          if (golesLocal === golesVisita) {
            resultado = "E";
          } else {
            const gano =
              (esLocal && golesLocal > golesVisita) ||
              (!esLocal && golesVisita > golesLocal);
            resultado = gano ? "V" : "D";
          }

          return {
            tipo: resultado,
            marcador: `${golesLocal} - ${golesVisita}`,
          };
        });

        setRacha(ultimos5Partidos.reverse());
      });

    // Próximo partido
    fetch("https://api.sofascore.com/api/v1/team/3161/events/next/0")
      .then((res) => res.json())
      .then((data) => {
        if (!data.events || data.events.length === 0) {
          setProximo(null);
          return;
        }
        const partido = data.events[0];
        setProximo({
          local: partido.homeTeam.name,
          visita: partido.awayTeam.name,
          localId: partido.homeTeam.id,
          visitaId: partido.awayTeam.id,
          fecha: partido.startTimestamp * 1000,
        });
      });
  }, []);

  const formatoFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString("es-CL", {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "long",
    });
  };

  const colorResultado = (tipo) => {
    if (tipo === "V") return "text-green-500";
    if (tipo === "E") return "text-yellow-400";
    if (tipo === "D") return "text-red-500";
    return "text-white";
  };

  //OBTENER LOGOS DE LOS EQUIPOS
  const getLogoUrl = (teamId) =>
    `https://api.sofascore.app/api/v1/team/${teamId}/image`;

  return (
    <div className="relative w-full text-white flex flex-col items-center justify-center rounded-lg">
      {/* Últimos 5 partidos */}
      <div className="text-xs text-gray-300 w-full flex flex-col items-start">
        <div className="flex gap-2">
          {racha.length > 0 ? (
            racha.map((r, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className={`font-bold text-xs ${colorResultado(r.tipo)}`}>
                  {r.tipo}
                </span>
                <span className="text-[10px]">{r.marcador}</span>
              </div>
            ))
          ) : (
            <span>Cargando...</span>
          )}
        </div>
      </div>

      {/* Próximo partido con logos */}
      <div className="text-center">
        {proximo ? (
          <>
            <h2 className="text-lg font-bold mb-2">Próximo partido</h2>
            <div className="flex items-center justify-center gap-3">
              {/* Logo local */}
              <img
                src={getLogoUrl(proximo.localId)}
                alt={proximo.local}
                className="w-10 h-10"
              />
              <span className="text-lg font-bold">vs</span>
              {/* Logo visitante */}
              <img
                src={getLogoUrl(proximo.visitaId)}
                alt={proximo.visita}
                className="w-10 h-10"
              />
            </div>
            <p className="text-gray-400 mt-2">{formatoFecha(proximo.fecha)}</p>
          </>
        ) : (
          <p>Cargando próximo partido...</p>
        )}
      </div>
    </div>
  );
}
