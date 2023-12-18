
import styled from "styled-components";
import NoticiasLayout from "../../layouts/noticiasLayout";
import INoticias from "../../types/INoticias";
import Banner from "@art/components/Banner";

interface NoticiasProps {
  noticia: INoticias;
}

async function getNoticias() {
  try {
    const response = await fetch("http://localhost:4000/noticias_jogos");
    if (!response.ok) {
      throw new Error("Erro ao obter dados");
    }
    const dados = await response.json();
    return dados;
  } catch (error) {
    console.error("Erro na obtenção de dados", error);
    throw error;
  }
}

export async function getStaticPaths() {
  try {
    // Não faça chamadas de API aqui, mova para getStaticProps ou getServerSideProps

    // Retorna as possíveis rotas dinâmicas
    return { paths: [], fallback: false };
  } catch (error) {
    console.log("Error fetching data", error);
    return { paths: [], fallback: true };
  }
}

const DivStyled = styled.div`
 
  picture{
    border-radius: 12px;
    margin-left: 150px;
  }
  img{
    width: 1000px;

  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .tags{
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
   
  }
  span{
      color: antiquewhite;
      font-weight: 500;
      background-color: #747474;
      padding: 4px;
      border-radius: 8px;
    }
  .noticia{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 900px;
    gap: 12px;
    margin-top: 12px;
  }
  .descricao{
    display: flex;
    width: 900px;
    border-bottom: 1px solid;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    
  }
  .noticia__conjunto{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-left: 300px ;
    margin-bottom:120px
  }
  h1{
    color: ${props => props.theme.textColor};
  }
  color: ${props => props.theme.secondary};
  @media(max-width: 1000px){
    .noticia__conjunto{
      margin-left: 24px;
      width: fit-content;
      margin-right: 24px;
      font-size: 32px;
    }
    picture{
      margin: 0;
    }
  }
`

export default function NewPage({ noticia }: NoticiasProps) {

    if(!noticia){
        return <p>Aguarde...</p>
    }

  return (
    <>
      <NoticiasLayout>
        <DivStyled key={noticia.id}>
            <Banner>
              <picture>
              <source srcSet={noticia.imagem}  />
              <img
                src={noticia.imagem_capa}
                alt="Landscape picture"
              />
              </picture>
            </Banner>
          <div className="noticia__conjunto">
            <div className="descricao">
              <h1>{noticia.titulo}</h1>
              <p>{noticia.categoria.toUpperCase()}</p>
              <p>{noticia.data_publicacao}</p>
              <div className="tags">
              {noticia.tags.map((tag) => {
                  return(
                    <>
                      <span>{tag[0].toUpperCase() + tag.substring(1)}</span>
                    </>
                  )
                })}
              </div>
            </div>
              <div className="noticia">
                <h2>{noticia.titulo}</h2>
                <p>{noticia.subtitulo}</p>
                <p>{noticia.texto}</p>
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
    const noticias = await getNoticias();
    const noticia = noticias.find((item) => item.id.toString() === id);
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
  } catch (error) {
    console.error("Error fetching data", error);
    return {
      notFound: true,
    };
  }
}
