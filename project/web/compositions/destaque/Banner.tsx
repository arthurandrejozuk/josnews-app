import Banner from "@art/components/Banner";
import {Text} from "@art/components/Text";
import styled from "styled-components"

const BannerImage = styled.img`
    
    max-width: 100%;
    width: 1200px;
    height: auto;
    background-size: cover;
    background-repeat:no-repeat;
    height: auto;
    border-radius: 12px ;
   
   
    @media(max-width:1000px){
        margin-left: 0px;
        width: 100%;
    }
    
`

export default function BannerDestaque({destaque}) {

    const {titulo, subtitulo, imagem} = destaque;

    return(
        <Banner>
            <BannerImage src={imagem}/>
            <div>
                <Text>{titulo}</Text>
                <p>{subtitulo}</p>
            </div>
        </Banner>
    )
}