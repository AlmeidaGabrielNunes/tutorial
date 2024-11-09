import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Produto(){
    const [produtos, setProdutos] = useState([])
    
    useEffect(
        function(){
            async function consultar () {
                const resposta  = await axios.get("http://localhost:8000/api/produto")
                console.log(resposta)
                setProdutos(resposta.data)
                
            }
            consultar();
        }
        ,[]
    )

    return (
        <div>
            <Link to='/produto/create'>Novo</Link>
            <table>
                <thead><tr><th>Nome</th></tr></thead>
                <tbody>
                    {produtos==null ? null : produtos.map(
                        (produto)=>
                            <tr key={produto.id}>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                                <td><Link to={"/produto/update/" + produto.id}>Alterar</Link></td>
                                <td><Link to={"/produto/delete/" + produto.id}>Excluir</Link></td>
                            </tr>
                    )}
                </tbody>
            </table>
            <Link to="/">Voltar</Link>
        </div>
    )
}