import styled from "styled-components";
import MenuLateral from "../compositions/menu/MenuLateral";

const LayoutStyle = styled.div`
    
    span{
        display: flex;
    }


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