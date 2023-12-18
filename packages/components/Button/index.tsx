import styled from "styled-components";
import React  from 'react';

export const ButtonS = styled.button`
    
    text-decoration: none;
    color: ${props => props.theme.textColor};
    border: 2px solid;
    border-radius: 8px;
    padding: 12px;
    width: 120px;
    font-weight: 700;
    background-image: linear-gradient(to right,#181818, #313131);
    cursor: pointer;
    
`


export default function Button({onclick, children, className}){
    
    return(
        <ButtonS className={className} onClick={(onclick)}>
            {children}
        </ButtonS>
    )
       
    
}

