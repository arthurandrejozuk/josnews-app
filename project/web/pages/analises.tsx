import { useEffect, useState } from "react";
import AnaliseCard from "../compositions/analise/AnaliseCard";
import Layout from "../layouts/padraoLayout";
import IAnalises from "../types/IAnalises";
import styled from "styled-components";
import Ranks from "../compositions/ranks/ranks";

const CardsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  margin-left: 400px;
  margin-bottom: 32px;
  margin-top: 40px;
  @media(max-width: 1200px){
     margin-left: 40px;
     margin-right: 12px;
  }
  
`;

export default function Analises() {
  const [dados, setDados] = useState<IAnalises[]>([]);
  const [loading, setLoading] = useState(true);
  const [rankAtivado, setRankAtivado] = useState(true)
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

  return (
    <Layout>
      <CardsStyled id="sobre">
        {dados.map((analise) => {
          return (
            <>
              <AnaliseCard
                image={analise.image}
                jogo={analise.jogo}
                link={analise.link}
                sobre={analise.sobre}
              />
            </>
          );
        })}
      </CardsStyled>
      <div>
        <Ranks ativado={rankAtivado}/>
      </div>
    </Layout>
  );
}
