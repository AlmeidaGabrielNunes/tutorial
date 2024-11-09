import Home from "./Paginas/Home";
import Sobre from "./Paginas/Sobre";
import Layout from "./Paginas/Layout";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Produto from "./Paginas/Produto";
import ProdutoCreate from "./Paginas/Produto/create";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="produto" element={<Produto />}/>
                    <Route path="produto/create" element={<ProdutoCreate />}/>
                    <Route path="*" element={<h1>Inexistente</h1>} /> { /*Comentaŕio: rota inexistente*/}
                </Route>
            </Routes>   
        </BrowserRouter>
    )
    }
