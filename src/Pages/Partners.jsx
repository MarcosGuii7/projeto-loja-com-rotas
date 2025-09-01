import { useState } from 'react';
import nike from '../assets/nike.png'
import "../components/Partners/Partners.css";

export default function Partners() {
    const [parceiros] = useState([
        { id: 1, nome: "Nike", img: nike },
    ]);

    return (
        <div className="grid-partners">
            {parceiros.map((parceiro) => (
                <article className="card-partners" key={parceiro.id}>
                    <img src={parceiro.img} alt={parceiro.nome}/>
                    <h3>{parceiro.nome}</h3>
                </article>
            ))}
        </div>
    );
}