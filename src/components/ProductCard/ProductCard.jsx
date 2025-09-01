import { useState } from "react"
import tenis from '../../assets/tenis.png'
import mochila from '../../assets/mochila.png'
import headphone from '../../assets/headphone.png'
import camiseta from '../../assets/camiseta.png'
import "./ProductCard.css";

export default function ProductCard() {
    const [produtos] = useState([
        { id: 1, nome: "Tênis Runner", preco: 199.9, img: tenis },
        { id: 2, nome: "Mochila Urban", preco: 149.9, img: mochila },
        { id: 3, nome: "Fone Wireless", preco: 299.9, img: headphone },
        { id: 4, nome: "Camisa Tech", preco: 89.9, img: camiseta }
    ]);

    return (
        <div className="grid">
            {produtos.map((produto) => (
                <article className="card" key={produto.id}>
                    <img src={produto.img} alt={produto.nome}/>
                    <h3>{produto.nome}</h3>
                    <p>R$ {produto.preco.toFixed(2)}</p>
                    <button>Adicionar</button>
                </article>
            ))}
        </div>
    );
}