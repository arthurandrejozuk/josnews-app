import styled from "styled-components";
import Card from "./Card";
import useNoticias from "../../useFunction/useDadosNoticias";
import OpcoesNews from "../categoria/OpcoesNews";
import { useState } from "react";
import INoticias from "../../types/INoticias";

const CardsStyled = styled.div`
    
    display: flex;
    flex-direction: column;
    margin-left: 400px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    margin-bottom: 50px;
    @media(max-width:1000px){
      margin-left:0px;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 12px;
    }
    
   `
   const DestaquesStyled = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h1{
       color: ${props => props.theme.secondary};
        margin-bottom: 24px;
    }
   `

export default function Cards(){

    const opcoes:{ categoria: string; key: number; selecionado: boolean }[] = [
        {
            categoria: "Ultimas",
            key: 1,
            selecionado: false
        },
        {
            categoria: "Destaques",
            key: 2,
            selecionado: false
        },
        {
            categoria: "Xbox",
            key: 3,
            selecionado: false
        },
        {
            categoria: "Playstation",
            key: 4,
            selecionado: false
        },
        {
            categoria: "Nintendo",
            key: 5,
            selecionado: false
        },
        {
            categoria: "Filmes",
            key: 6,
            selecionado: false
        }
    ];

    
    const {dados: news} = useNoticias();

    const  [filteredNews, setFilteredNews] = useState<INoticias[]>();
    function comparaCategoria(selectedCategory: { categoria: string }) {
        const selectedCategoryInfo = opcoes.find(
          (opcao) => opcao.categoria === selectedCategory.categoria
        );
      
        if (selectedCategoryInfo === undefined) {
            // If no category is selected, show all news
            setFilteredNews(news);
          } else {
            // Filter news based on the selected category
            const filtrado =  news.filter(
              (noticia) => noticia.categoria === selectedCategoryInfo.categoria
            );
            setFilteredNews(filtrado)
          }
        }
        
        (filteredNews || news) && (filteredNews || news).map(noticia => {
      console.log(noticia)
    })

    return(
    < DestaquesStyled>
        <OpcoesNews onClick={(categoria) => comparaCategoria({categoria})} opcoes={opcoes} />
            <CardsStyled>  
        {(filteredNews || news) &&
            (filteredNews || news).map((noticia) => (
          <Card
            key={noticia.id}
            titulo={noticia.titulo}
            tags={noticia.data_publicacao}
            categoria={noticia.categoria}
            capa={noticia.imagem_capa}
            link={noticia.link}
            subtitulo={noticia.subtitulo}
          />
        ))}
      {!filteredNews && !news && <h1>Nada a vista</h1>}
            </CardsStyled>
    </ DestaquesStyled>
       
    )
}