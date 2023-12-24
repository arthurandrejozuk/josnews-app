import styled from "styled-components";
import MenuLateral from "../compositions/menu/MenuLateral";

const LayoutStyle = styled.div`
    
    span{
        display: flex;
    }

    width: 100%;

`

 export default function NoticiasLayout({children}){
    return(
        <>
            <MenuLateral/>
            <LayoutStyle>
                {children}
            </LayoutStyle>
            
        </>
    )
 }