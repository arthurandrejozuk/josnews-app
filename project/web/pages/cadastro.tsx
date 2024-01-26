import CadastroOpcoes from "../compositions/pageLoginCadastro/Cadastro";
import LoginCadastro from "../compositions/pageLoginCadastro/Login";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const StyledLogin = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
    img{
        width: 100%;
        height: 100vh;
    }
    .voltar{
        position: fixed;
        right: 45%;
        top: 3%;
        display: flex;
        align-items: center;
        a{
            font-weight: 500;
            color: ${props => props.theme.secondary};
            text-decoration:none;
        }
    }
    .arrow{
        color: ${props => props.theme.secondary};
    }
    
    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 8px;
        width: 50%;
    }
    @media(max-width: 800px){
        img{
            display: none;
        }
        .img{
            display: none;
        }
        .login{
            width: 700px;
        }
    }
`
const LabelStyled = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    label{
        width: auto;
        align-self: flex-start;
        color: ${props => props.theme.textColor};
    }
    input{
        width: 300px;
        padding: 8px;
        border-radius:8px  ;
        border: 1px solid ${props => props.theme.textColor};
        background-color: transparent;
        color: ${props => props.theme.secondary}
    }
   
       
    
`

export default function Login(){
    return(
        <StyledLogin>
            <div className="voltar">
                <IoIosArrowBack className="arrow"  size={32} />
                <Link href="/">Voltar</Link>
            </div>
            <picture>
                <source srcSet="https://img.freepik.com/vetores-gratis/skull-gaming-with-joy-stick-emblema-estilo-moderno_32991-492.jpg" type="image/jpg" />
                    <img
                        src="https://img.freepik.com/vetores-gratis/skull-gaming-with-joy-stick-emblema-estilo-moderno_32991-492.jpg"
                        alt="Landscape picture"
                    />
            </picture>
            <section className="login">
            <LoginCadastro opcao={"CADASTRAR"}>
                < LabelStyled >
                        <label htmlFor="">Email</label>
                        <input type="text" name=""placeholder=""  id="" />
                    </ LabelStyled >
                < LabelStyled >   
                        <label htmlFor="">Senha</label>
                        <input type="text" name="" placeholder="" id="" />
                </ LabelStyled >
                < LabelStyled >   
                        <label htmlFor="">Confirme a senha</label>
                        <input type="text" name="" placeholder="" id="" />
                </ LabelStyled >
            </LoginCadastro>      
            </section>
        </StyledLogin>
    )
}

//"https://img.freepik.com/vetores-gratis/skull-gaming-with-joy-stick-emblema-estilo-moderno_32991-492.jpg"