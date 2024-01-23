import { useEffect, useState } from "react";
import Layout from "../layouts/padraoLayout";
import { IVideos } from "../types/IVideos";
import Card from "../compositions/cards/Card";
import styled from "styled-components";

const VideosStyled = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 300px;
    margin-top: 40px;
    @media(max-width: 1200px){
       margin: 32px 12px 12px 12px;

    }

`

export default function Videos() {
  const [dados, setDados] = useState<IVideos[]>([]);
  useEffect(() => {
    const dadosFetch = async () => {
      try {
        const response = await fetch("http://localhost:8080/videos");
        const data = await response.json();
        if (data === undefined) {
          setDados([]);
        }
        setDados(data);
      } catch (err) {
        console.log(err);
      }
    };
    dadosFetch();
  }, []);

  return (
    <Layout>
        <VideosStyled>
      {dados.map((video) => {
        return (
          <>
            <Card
              minutagemOuPublicacao={<>Tempo:</>}
              link={video.link} 
              capa={video.image}
              tags={video.minutes}
              titulo={video.title}
              subtitulo={video.description}
            />
          </>
        );
      })}
      </VideosStyled>
    </Layout>
  );
}
