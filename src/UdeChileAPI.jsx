
import { useEffect, useState } from "react";

export default function ApiUdeChile(){
    const [resultado, setResultado] = useState([]); //Para los ultimos 5 resultados
    const [proximo, setProximo] = useState(null); //para info ddeel partio q viene

    useEffect(( ) =>{
        fetch("https://api.sofascore.com/api/v1/team/3161/events/last/0")
    })
}