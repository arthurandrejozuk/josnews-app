import { useState } from "react";
import styled from "styled-components";
import Text from "@art/components/Text";

const Opcoes = styled.div`
    a{
        text-decoration:none;
        color: ${(props) => props.theme.textDefault};
    }
      
    margin-left: 400px; 
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-scroll-behavior: smooth;
    -moz-scroll-behavior: smooth;
    -ms-scroll-behavior: smooth;
    scroll-behavior: smooth;
    margin-bottom: 24px;
    gap: 12px;
    display: flex;
    align-items: start;
    justify-content:start;
    width: 700px;
    padding: 12px;
    border-radius: 4px;
    
    padding: 8px;

    button{
        margin-bottom: 12px;
        padding: 10px;
        width: 120px;
        background-color: #232277;
        box-shadow: 1px 5px 5px #32308b;
        color: antiquewhite;
        border: none;
        border-radius: 12px;
        font-size: 20px;
    }
    button:hover{
       cursor: pointer;
    }
    @media(min-width:1200px){
        width: auto;
        overflow: hidden;
    }
    @media(max-width:1000px){
      margin-left:0px;
      width: 500px;
    }
`

const EscolhaStyled = styled.h1`
    color: ${props => props.theme.secondary};
    margin-right: 300px;
    margin-bottom: 12px;
    @media(max-width:1000px){
       align-self: flex-start;
       margin-left: 5%;
    }
`

export default function OpcoesNews({opcoes, onClick}){
    

    const [escolhido , setEscolha] = useState("")
   

    const escolha = (categoria) => {

        setEscolha(categoria);
      
       
        onClick(categoria)
           
       
    }

    return(
        <>
            <Opcoes>
                {opcoes.map((opcao) => {
                    return(
                        <div key={opcao.key}>
                            <button onClick={() => escolha(opcao.categoria)}>
                                <Text tag="a">{opcao.categoria}</Text>
                            </button>
                        </div>
                    )
                })}
            </Opcoes>
            <EscolhaStyled>{escolhido}</EscolhaStyled>
        </>
    )
}