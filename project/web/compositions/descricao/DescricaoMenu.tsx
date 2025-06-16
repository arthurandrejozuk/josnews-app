
import styled, { keyframes } from "styled-components"
import { useState } from "react";
import Descricao from "./Descricao";
import ReviewMenu from "../menuLateral/ReviewMenu";
import HomeMenu from "../menuLateral/HomeMenu";

const fadeInOut = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const DescStyled = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 26px;
    padding-left: 24px;
    gap: 12px;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    -webkit-scroll-behavior: smooth;
    -moz-scroll-behavior: smooth;
    -ms-scroll-behavior: smooth;
    scroll-behavior: smooth;
    overflow-y: hidden;
    height: 50%;
    width: 100%;
    
    ul{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    li{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px;
        padding-right: 12px;
        width: 100%;
        width: 300px;
        animation: ${fadeInOut} 0.5s ease;
        border-radius: 8px;
        text-align: center;
       @media(max-width: 400px){
        font-size: 32px;
       }
    }
    .arrow{
           margin-left: 60px;
    }
    li:hover{
        background-color: ${props => props.theme.backgroundSecondary};
        
    }

    @media(max-height: 550px){
      overflow-y: scroll;
    }
`



export default function DescricaoMenu(){

    const [review, setReview] = useState(false)

    return(
        <DescStyled>
           <Descricao >
            {review ? 
            <ReviewMenu onClick={() => { review ? setReview(false) : setReview(true)}}/> 
            : <HomeMenu onClick={() => { review ? setReview(false) : setReview(true)}}/>
            }
            </Descricao>
        </DescStyled>
    )
}