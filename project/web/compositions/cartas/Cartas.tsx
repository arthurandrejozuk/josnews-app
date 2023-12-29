import styled from "styled-components";
import Carta from "./Carta";

const CartasStyled = styled.div`
    
    margin-left: 400px;
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
    .cartas{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 60px;
        /* overflow-x: scroll;
        overflow-y: hidden; */
    }
    @media(max-width: 1000px){
       margin-left: 0;
       .cartas{
        gap:12px;
       }
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