import { useState } from 'react';
import nike from '../../assets/nike.png'
import adidas from "../../assets/adidas.png"
import "./PartnersCard.css";

export default function PartnersCard() {
    const [parceiros] = useState([
        { id: 1, nome: "Nike", img: nike },
        { id: 2, nome: "Adidas", img: adidas },
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