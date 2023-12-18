import styled from "styled-components";

const StyledDiv = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;
margin-top: 120px;
max-width: 100%;

button{
    color: ${props => props.theme.textColor};
    border: 2px solid;
    border-radius: 8px;
    padding: 12px;
    width: 120px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
}
button:hover{
   opacity: 0.9;
}
a,p{
    cursor: pointer;
    
    color: ${props => props.theme.secondary};
}
a:hover{
    opacity: 0.9;
}



`


export default function LoginCadastro({children,opcao}){
    return(
        <StyledDiv>
            {children}
            <div>
                <button>{opcao}</button>
            </div>
        </StyledDiv>
    )
}