import styled from "styled-components";
import MenuLateral from "../compositions/menuLateral/Principal";

const LayoutStyle = styled.div`
    
    span{
        display: flex;
    }

    width: 100%;

`

 export default function Layout({children}){
    return(
        <>
            <MenuLateral/>
            <LayoutStyle>
                {children}
            </LayoutStyle>
            
        </>
    )
 }