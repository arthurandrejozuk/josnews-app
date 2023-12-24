import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    margin-left: 200px;
    gap: 12px;
    
    img:hover{
        transition: 250ms;
        filter: blur(0px)
    }
    img{
      
        filter: blur(2px);
        border-radius: 12px;
    }
    
    div{
        
        position: absolute;
        top: 60%;
        /* transform: translate(-50%, -50%); */
        z-index: 1;
        display: flex;
        font-weight: 550;
        flex-direction: column;
        color: ${props => props.theme.textColor};
        top: 600px;
        font-size: 32px;
        
    }
    @media(max-width:1100px){
        margin-left: 0px;
        div{
            position: absolute;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: ${props => props.theme.textColor};
            top: 270px;
            font-size: 24px;
    }
    img{
        width: 700px;
    }
        img:hover{
            transition: 250ms;
            filter: blur(0px)
        }
        img{
        
            filter: blur(0);
            border-radius: 12px;
        }
    }
`

export default function Banner({children}){
    return(
        <BannerContainer>
            {children}
        </BannerContainer>
    )
}