import styled from 'styled-components';

const StyledRank = styled.a`
    cursor: pointer;
    text-decoration: none;
    display: flex;
    gap: 12px;
    width: 300px;
    height: 100px;
    h1{
        font-size: 24px;
        color:${props => props.theme.textColor};
    }
    p{
        color:${props => props.theme.secondary};
        font-size: 20px;
    }
    img{
        width: 100px;
        height: 100px;
        border-radius: 8px;
    }
    background-color: ${props => props.theme}
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

`

export default function Rank({image, jogo, rank, link}){

    return(
        <StyledRank href={link}>
            <img src={image} alt="image" />
            <div>
                <h1>{jogo}</h1>
                <p>Nota: {rank}</p>
            </div>
        </StyledRank>
    )
}