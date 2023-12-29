/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"

const LinkStyled = styled.a`
    
    text-decoration: none;

`

const CardStyled = styled.div`

    display: flex;
    gap: 12px;
    background-color: ${props => props.theme.background};
    font-size: 20px;
    align-items: start;
    justify-content: start;
    width: 700px;
    margin-bottom: 8px;
    padding-bottom: 12px;
    border-bottom: 1px solid #9aaaf5;
    h1{
        font-size: 32px;
        color: ${props => props.theme.textColor};
    }
    .date{
        font-size: 16px;
    }
        cursor: pointer;
    div{
        opacity: 0.8;
        gap: 8px;
        display: flex;
        flex-direction: column;
    }
    div:hover{
        opacity: 1;
    }

    img{
        width: 200px;
        height: 180px;
        border-radius: 8px;
    }
    p{
        color: ${props => props.theme.secondary};
        font-weight: 600;
    }
    .descricao{
        padding: 0px 8px 8px
    }
   
   @media(min-width:1200px){
       img{
        max-width: 240px;
        height: 200px;
        border-radius: 8px;
       }
       width: 900px;
   }
`

export default function Card({titulo, categoria, capa, link, tags, subtitulo}){

  
    return(
        <LinkStyled  href={link}>
            <CardStyled className="card">
                    <picture>
                        <source srcSet={capa}  />
                        <img
                            src="https://example.com/hero.jpg"
                            alt="Landscape picture"
                        />
                    </picture>
                    <div className="descricao">
                        <h1>{titulo}</h1>
                        <p className="date">Publicado {tags.split("T", 1)}</p>
                        <p>{subtitulo}</p>
                        <p>{categoria}</p>
                    </div>
            </CardStyled >
        </LinkStyled >
    )
}