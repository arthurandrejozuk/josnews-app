import styled from "styled-components";
import Carta from "./Carta";

const CartasStyled = styled.div`
    
    width: 100%;
    display: flex;
    margin-top: 40px;
    margin-left: 200px;
    justify-content: center;
    .cartas{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 80px;
        /* overflow-x: scroll;
        overflow-y: hidden; */
    }
    @media(max-width: 1200px){
        margin-left: 0px;
    }
`

export default function Cartas(){
    return(
        <CartasStyled>
            <div className="cartas">
                <Carta/>
                <Carta/>
                <Carta/>
            </div>
        </CartasStyled>
    )
}