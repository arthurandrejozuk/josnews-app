import Button from "@art/components/Button";
import { useRouter } from "next/router";
import styled from "styled-components";

const LoginStyles = styled.div`
    bottom: 32px;
    display: flex;
    align-items: center;
    width: auto;
    padding-top: 16px;
    padding-bottom: 16px;
    border-top: 2px solid black;
    width: 100%;
    justify-content: space-around;
    background-image: linear-gradient(to right,#181818, #313131) ;
    .cadastro{
        background-image: linear-gradient(to right,#c5c5c5, #e7e7e7) ;
        color: #313131;
    }
    .login:hover{
        opacity: 0.8;
    }
    .cadastro:hover {
        opacity: 0.8;
    }
`
const ButtonLogin = styled(Button)`
  
   
  
`

export default function Login(){

    const router = useRouter()
    
    return(
        <LoginStyles >
            <ButtonLogin className={"login"}  onclick={() => {
                router.push("/login");
            }}>
                LOGIN
            </ButtonLogin >
            <ButtonLogin className={"cadastro"}  onclick={() => {
                router.push("/cadastro");
            }}>
                CADASTRAR
            </ButtonLogin >
        </LoginStyles >
    )
}