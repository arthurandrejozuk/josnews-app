import styled from "styled-components"

const DestaquesStyled = styled.div`
    
    div:hover{
        text-decoration: underline ${props => props.theme.destaque};
        text-underline-offset: 6px;
        transition: 500ms;
        cursor: pointer;
    }
    
`

export default function Destaques({children}){
    return(
        <DestaquesStyled>
            {children}
        </DestaquesStyled>
    )
}