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
    width: 800px;
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
    .img{
        
        width: 200px;
        height: 200px;
    }
    img{
        border-radius: 8px;
        width: 200px;
        height: 200px;
        object-fit: fill;
    }

    p{
        color: ${props => props.theme.secondary};
        font-weight: 600;
    }
    .descricao{
        padding: 0px 8px 8px
    }
   
   @media(max-width:1450px){
        .sobre{
            font-size: 24px;
        }
        p{
            font-size: 32px;
        }
       width: 750px;
   }
`

export default function CardAnalises({link, jogo, sobre, image}){
    return(
    <LinkStyled  href={link}>
        <CardStyled className="card">
            <div className="img">
                  <img src={image} alt="" />
            </div>
                <div className="descricao">
                    <h1>{jogo}</h1>
                    <p className="sobre">Sobre: {sobre}</p>
                    <p>Veja Mais...</p>
                </div>
        </CardStyled >
    </LinkStyled >
    )
}