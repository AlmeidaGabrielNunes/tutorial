import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function ProdutoCreate(){
    const [status, setStatus] = useState("");
    const nome = useRef("");
    const preco = useRef("");
    return(
        <div>
            <form onSubmit={ gravar}>
                nome: <input ref={nome}type="text" maxLength="100" required />
                preço: <input ref={preco} type="number" step="0.01" required />
                <button type="submit">Enviar</button>
            </form>
            <h3>{status}</h3>
            <Link to='/produto'> Voltar</Link>
        </div>
    )

    async function gravar(e) {
        e.preventDefault();
        try{
            const produto= {nome: nome.current.value, preco: preco.current.value}
            const resposta = await axios.post('https://localhost:8000/api/produto', produto);
            setStatus("Produto cadastrado");
            console.log(resposta);
        }catch(erro){
            setStatus("Falha ao cadastrar produto");
        }
        
    }
}