import styled, { keyframes } from "styled-components"
import { CiSearch } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import NoticiasEncotradas from "../NoticiasEncontrada/NoticiasEncotradas";
import { useState } from "react";
import useDadosNoticias from "../../useFunction/noticias/useDadosNoticias";

const fadeInOut = keyframes`
  from {
    opacity: 0.9;
    transform: translateX(-1px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const PesquisaStyled = styled.div`
    display: flex;
    align-items: start;
    padding-top: 200px;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 5;
    backdrop-filter: blur(27.1828px);
    
    input{
        width: 300px;
        border: 1px solid;
        border-radius: 4px;
        border: 0px;
        padding: 4px;
        font-size: 24px;
        background-color: transparent;
        color: ${props => props.theme.secondary};
    }
    input::placeholder{
        font-size: 24px;
        font-weight: 500;
        color: ${props => props.theme.secondary};
    }
    .input{
        display: flex;
        gap: 12px;
        align-items: center;
        background-color: ${props => props.theme.background};
        border-radius: 5px;
        display: flex;
        padding: 12px;
        animation: ${fadeInOut} 0.1s alternate;
    }
    .pesquisa__icon, .fecha__icon{
        cursor: pointer;
        color: ${props => props.theme.secondary};
        font-weight: 500;
    }
    
    @media(width: 500px){
        input::placeholder{
            font-size: 36px;
        }
    }
`

    
export default function Pesquisa({ativado, onClick}){

    const {dados: noticias} = useDadosNoticias();

    const [procura, setProcura] = useState<string>("")
    const [encontrados, setEncontrados] = useState([])
    const [pesquisaAtivada, setPesquisaAtivada] = useState(false)

    function encontraNoticia(e: React.ChangeEvent<HTMLInputElement>) {
        const valorDigitado = e.target.value;
        setProcura(valorDigitado);
        const noticiasFiltradas = noticias.filter((noticia) => {
            const tituloNoticia = noticia.titulo.toLowerCase();
            const tituloPesquisado = valorDigitado.toLowerCase();
            return tituloNoticia.includes(tituloPesquisado);
        })
        ativaPesquisa()
        setEncontrados(noticiasFiltradas);
       
    }
    function ativaPesquisa() {
        setPesquisaAtivada(!pesquisaAtivada);
        return pesquisaAtivada;
    }

    if(ativado){
        return(
            <PesquisaStyled >
                <div className="input">
                    <IoCloseCircle size={36} className="fecha__icon" onClick={onClick}/>
                    <input type="text" onChange={(a) => encontraNoticia(a)} placeholder="jogos, filmes..." />
                    <CiSearch size={36} className="pesquisa__icon"/>
                </div>
                    {pesquisaAtivada && encontrados.map((encontrado, index) => {
                        return(
                            <NoticiasEncotradas key={index} link={encontrado.link} img={encontrado.imagem_capa} titulo={encontrado.titulo} />
                        ) 
                    })}
            </PesquisaStyled>
        )
    }
    return(
        <>
        </>
    )
    
}