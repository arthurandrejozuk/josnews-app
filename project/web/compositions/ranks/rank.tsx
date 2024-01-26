import styled from 'styled-components';
import Text from '@art/components/Text';

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
                <Text tag='h1'>{jogo}</Text>
                <Text>Nota: {rank}</Text>
            </div>
        </StyledRank>
    )
}