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
            <li><Text>Análises</Text></li>
            <li><Text>Rankings</Text></li>
            <li> <Text>Sobre o Jogo</Text></li>
        </Descricao>
    )
    }