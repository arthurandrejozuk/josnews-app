import { useEffect, useState } from "react";
import IAnalises from "../../types/IAnalises";
import styled from 'styled-components';
import Rank from "./rank";

const StyledRanks = styled.div`
    
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 32px;
    margin-bottom: 40px;
    right: 40px;
    gap: 12px;
    h2{
        color:${props => props.theme.secondary}
    }
    @media(max-width:1450px){
      position: initial;
      margin-left: 400px;
    }
    @media(max-width:1200px){
      margin-left: 40px;
    }
`

export default function Ranks({ativado}){

    const [dados, setDados] = useState<IAnalises[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      const dadosFetch = async () => {
        try {
          const response = await fetch("http://localhost:8080/analises");
          const data = await response.json();
          if (data === undefined) {
            setDados([]);
          }
          setDados(data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
      dadosFetch();
    }, []);

    if(!ativado){
      return(
        <>
        </>
      )
    }
    return(
        <StyledRanks id="rank">
            <h2>Ranks:</h2>
            {dados.map(data => {
                return(
                    <>
                        <Rank link={data.link} image={data.image} jogo={data.jogo} rank={data.rank} />
                    </>
                )
            })}
        </StyledRanks>
    )
}