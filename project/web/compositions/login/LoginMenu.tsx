import styled from "styled-components"
import Login from "./Login"

const LoginStyled = styled.div`
    position: absolute;
    bottom: 12px;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    height: 76px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 1;

`

export default function LoginMenu(){
    return(
        <LoginStyled>
            <Login />
        </LoginStyled>
    )
}