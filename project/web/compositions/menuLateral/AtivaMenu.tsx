import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";



const fadeInOut = keyframes`
  from {
    opacity: 0.9;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const MenuStyled = styled.div`
    
z-index: 2;
position: fixed;
flex-direction: column;
background-image: linear-gradient(to right, ${props => props.theme.background}, ${props => props.theme.backgroundSecondary}) ;
width: 350px;
height: 100vh;
display: flex;
align-items: start;
justify-content: start;
box-shadow:0px 2px 3px rgba(0, 0, 0, 0.75), 0px 17px 24px rgba(0, 0, 0, 0.3);
gap: 8px;
overflow: hidden;
height: 100%;
-webkit-transition-duration: 200ms;
transition-duration: 450ms;
animation: ${fadeInOut} 0.1s alternate;
/* color: ; */
.fecha{
        display: none;
        background-color:#444444;
        padding: 4px;
        border-top-left-radius:8px ;
        border-bottom-left-radius:8px ;
        border: none;
        position: absolute;
        left: 320px;
        top:12px;
       
}

@media(max-width: 1300px){
    display: none;
    .fecha{
        display: flex;
    }
   
}


`
const ButtonStyled = styled.button`

    
        background-color:#444444;
        padding: 4px;
        border-top-right-radius:8px ;
        border-bottom-right-radius:8px ;
        border: none;
        position: fixed;
        left: 0px;
        top: 24px;
        z-index: 3;
        cursor: pointer;
    


    @media(min-width: 1300px){
        .abre{
          
            display: none;
        }
        
    }

    @media(max-width:1300px){
        .abre{
            
            display: flex;
        }
       
    }
    
   
`

//()=>{menu.arrow === "flex" ? setMenu({arrow: "none",  mostraMenu: "flex"}) : setMenu({arrow: "flex",  mostraMenu: "none"})}

export default function Menu({children}){
    
    const [menuOn, setMenuOn] = useState(false);

    const [menu,setMenu] = useState({
        arrow: "none",
        mostraMenu: "flex"
    })
    if(menuOn){
        return(
            <>
             
             <ButtonStyled onClick={()=> {setMenuOn(false)}}><FaArrowRight color="#B6BBC4" size={32} /></ButtonStyled>
                <MenuStyled >
                    <button ><FaArrowLeft color="#B6BBC4" size={32} /></button>
                    {children}
                </MenuStyled>
            </>
        )
    }
    return(
        <>
            <ButtonStyled className="abre" style={{display: `${menu.arrow}`}} onClick={()=>{menu.arrow === "flex" ? setMenu({arrow: "none",  mostraMenu: "flex"}) : setMenu({arrow: "flex",  mostraMenu: "none"})}}><FaArrowRight color="#B6BBC4" size={32} /></ButtonStyled>
            <MenuStyled style={{display:`${menu.mostraMenu}`}}>
                <button className="fecha" onClick={()=>{menu.arrow === "flex" ? setMenu({arrow: "none",  mostraMenu: "flex"}) : setMenu({arrow: "flex",  mostraMenu: "none"})}}><FaArrowLeft color="#B6BBC4" size={24} /></button>
                {children}
            </MenuStyled>
        </>
    )
}