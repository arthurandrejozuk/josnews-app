import styled from "styled-components"
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";

const DivStyled = styled.div`
    display: flex;
    background-color: rgba(65, 73, 90, 0.8);
    backdrop-filter: blur(27.1828px);
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    position: fixed;
    top: 265px;
    z-index: 5;
    background-color: ${props => props.theme.background};
    border-radius: 8px;
    .encontrado{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        img{
            width: 250px;
            height: 200px;
            border-bottom-left-radius:8px;
            border-top-left-radius:8px;
            border-right: 2px solid ${props => props.theme.secondary};;
        }
        width: 500px;
        height: 200px;
        h4{
            padding-left: 24px;
            padding-right: 12px;
        }
    }

    a{
        text-decoration: underline;
        text-underline-offset: 2px;
        font-size: 24px;
        color:${props => props.theme.secondary};
    }
    .fecha__icon{
        position: absolute;
        left: -40px;
        color: ${props => props.theme.secondary};
        cursor: pointer;
    }

`

export default function NoticiasEncotradas({titulo, img, link}:{titulo:string, img:string, link:string}){

    const [desativa, setDesativa] = useState('flex');

    return(
        <DivStyled style={{display:`${desativa}`}}>
                <div className="encontrado">
                    <IoCloseCircle size={36} className="fecha__icon" onClick={() => {setDesativa("none")}}/>
                    <img src={img} alt="imagem da pesquisa" />
                    <a href={link}><h4>{titulo}</h4></a>
                </div>
        </DivStyled>
    )
}