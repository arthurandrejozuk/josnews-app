import styled from "styled-components";
import NoticiasLayout from "../../layouts/padraoLayout";
import INoticias from "../../types/INoticias";
import Banner from "@art/components/Banner";

interface NoticiasProps {
  noticia: INoticias;
}

async function getNoticias(id: string) {
  try {
    const response = await fetch(`http://localhost:8080/noticias/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao obter dados");
    }
    const dados = await response.json();
    return [dados];
  } catch (error) {
    console.error("Erro na obtenção de dados", error);
    throw error;
  }
}

export async function getStaticPaths() {
  try {
    return { paths: [], fallback: false };
  } catch (error) {
    console.log("Error fetching data", error);
    return { paths: [], fallback: true };
  }
}

const DivStyled = styled.div`
  picture {
    border-radius: 12px;
    margin-left: 150px;
  }
  img {
    width: 1000px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .tags {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
  }
  span {
    color: antiquewhite;
    font-weight: 500;
    background-color: #747474;
    padding: 4px;
    border-radius: 8px;
  }
  .noticia {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 900px;
    gap: 12px;
    margin-top: 12px;
  }
  .descricao {
    display: flex;
    width: 900px;
    border-bottom: 1px solid;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
  }
  .noticia__conjunto {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-left: 300px;
    margin-bottom: 120px;
  }
  h1 {
    color: ${(props) => props.theme.textColor};
  }
  color: ${(props) => props.theme.secondary};
  @media (max-width: 1000px) {
    .noticia__conjunto {
      width: fit-content;
      margin: 0px;
      gap: 12px;
    }
    picture {
      margin: 0;
    }
    @media (max-width: 400px) {
      .noticia__conjunto {
        font-size: 36px;
        margin: 0px;
      }
    }
  }
`;

export default function NewPage({ noticia }: NoticiasProps) {
  if (!noticia) {
    return <p>Aguarde...</p>;
  }

  return (
    <>
      <NoticiasLayout>
        <DivStyled key={noticia.id}>
          <Banner>
            <picture>
              <source srcSet={noticia.imagem_capa} />
              <img src={noticia.imagem_capa} alt="Landscape picture" />
            </picture>
          </Banner>
          <div className="noticia__conjunto">
            <div className="descricao">
              <h1>{noticia.titulo}</h1>
              <p>{noticia.categoria.toUpperCase()}</p>
              <p>{String(noticia.dataDePublicacao).split("T", 1)}</p>
              <div className="tags">
                {noticia.tags.map((tag) => {
                  return (
                    <>
                      <span>{tag[0].toUpperCase() + tag.substring(1)}</span>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="noticia">
              <h2>{noticia.titulo}</h2>
              <p>{noticia.subtitulo}</p>
              <p>{noticia.noticia}</p>
            </div>
          </div>
        </DivStyled>
      </NoticiasLayout>
    </>
  );
}

export async function getStaticProps(context: { params: { id: string } }) {
  try {
    const { id } = context.params;
    const noticias = await getNoticias(id);
    //const noticia :INoticias = noticias.find((item:INoticias) => item.id.toString() === id);
    if (Array.isArray(noticias)) {
      const noticia: INoticias = noticias.find(
        (item: INoticias) => item.id.toString() === id
      );
      if (noticia) {
        return {
          props: {
            noticia,
          },
        };
      } else {
        return {
          notFound: true,
        };
      }
    } else {
      console.error("Unexpected data structure for noticias:", noticias);
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.log(error);
  }
}
