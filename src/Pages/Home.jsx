import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Home() {
const [carregando, setCarregando] = useState(true)

useEffect(() => {
    const timer = setTimeout(() => setCarregando(false), 1000)
    return() => clearTimeout(timer)
})

    return (
        <section>
            <h2>Bem-Vindo à Home!</h2>

            {carregando ? (<p>Carregando...</p>) : (<ProductCard/>)}
        </section>
    )
}
