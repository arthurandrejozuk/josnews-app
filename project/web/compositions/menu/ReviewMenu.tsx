import { BiLeftArrowAlt } from "react-icons/bi";
import { Text } from "@art/components/Text";
import styled from "styled-components";
import Descricao from "../descricao/Descricao";

const VoltaStyled = styled.div`
    
    a{
        cursor: pointer;
    }
`

export default function ReviewMenu({onClick}){
    return(
        <Descricao>
            <VoltaStyled>
                <a onClick={onClick}><BiLeftArrowAlt size={24} color={"#B6BBC4"}/></a>
            </VoltaStyled>
            <Text href="/analises"><li>Análises</li></Text>
            <Text href="#rank"><li>Rankings</li></Text>
            <Text href="#sobre"><li> Sobre o Jogo</li></Text>
        </Descricao>
    )
    }