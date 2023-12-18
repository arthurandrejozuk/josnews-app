import React from "react";
import styled from "styled-components";

const LogoStyled = styled.span`

    display: flex;
    padding: 14px 24px;
    z-index: 1;
    align-items: center;
    gap: 8px;
    font-size: 32px;
    img{
        width: 210px; 
    }
    
`

export default function Logo({children}){
    return(
        <LogoStyled>
            {children}
        </LogoStyled>
    )
}