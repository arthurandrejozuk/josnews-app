import styled, { keyframes } from "styled-components"
import { CiSearch } from "react-icons/ci";

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
    position: fixed;
    left: 50%;
    background-color: #b6b6b6;
    padding: 8px;
    border-radius: 5px;
    display: flex;
    gap: 8px;
    animation: ${fadeInOut} 0.1s alternate;
    input{
        width: 300px;
        border: 1px solid  ;
        border-radius: 4px;
        padding: 4px;
    }
    input::placeholder{
        font-size: 16px;
        font-weight: 600;
    }
    .pesquisa__icon{
        cursor: pointer;
    }
`

export default function Pesquisa({ativado}){
    
    if(ativado){
        return(
            <PesquisaStyled>
                <input type="text" placeholder="jogos, filmes..." />
                <CiSearch color="black" className="pesquisa__icon"/>
            </PesquisaStyled>
        )
    }
    return(
        <>
        </>
    )
    
}