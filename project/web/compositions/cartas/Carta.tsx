import styled from "styled-components"

const CartaStyled = styled.div`
    

    div{
        transform: scale(1); /* Escala inicial */
    transition: transform 0.2s ease; /* Adiciona uma transição suave de 0.5 segundos */
    }
    div:hover{
        transform: scale(1.02);
    }

    img{
    width: 255px; 
    height: auto; 
    transform: scale(1); 
    transition: transform 0.5s ease; 

    }
    img:hover{
        transform: scale(1.01); /* Ajuste o valor conforme necessário para o seu zoom */
    }
    .titulo{
        position: relative;
        display: flex;
        justify-content: center;
        align-items:self-start;
        bottom:100px;
        background-color: ${props => props.theme.textColor};
        opacity: 0.9;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        width: 255px;
        height: 97px;
        max-height: 0%;
        transform: scale(1.01)
    }
    h3{
        margin-top: 12px;
        margin-left: 10px;
        color: ${props => props.theme.background};
        
    }
    h3:hover{
        text-decoration: underline;
        text-underline-offset: 4px;
    }
`


export default function Carta(){
    return(
      
            <CartaStyled>
            <div>
                <picture>
                    <source width={100} srcSet="https://image.api.playstation.com/vulcan/ap/rnd/202311/0220/b2f6d383b0d49f69646e6f4231bfcb4d5255083b228d18b1.png" />
                    <img width={100} src="https://image.api.playstation.com/vulcan/ap/rnd/202311/0220/b2f6d383b0d49f69646e6f4231bfcb4d5255083b228d18b1.png" alt="" />
                   <div className="titulo">
                        <h3>Fortnite acaba de lançar modo </h3>
                   </div>
                </picture>
            </div>
            </CartaStyled>
      
    )
}