import { useState, useEffect } from "react";
import PartnersCard from "../components/PartnersCard/PartnersCard";

export default function Partners() {
const [carregando, setCarregando] = useState(true)

useEffect(() => {
    const timer = setTimeout(() => setCarregando(false), 1000)
    return() => clearTimeout(timer)
})

    return (
        <section>
            <h2>Nossos Parceiros!</h2>

            {carregando ? (<p>Carregando...</p>) : (<PartnersCard/>)}
        </section>
    )
}
