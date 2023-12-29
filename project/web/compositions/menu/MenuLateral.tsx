import Logo from "@art/components/Logo";
import {Text} from "@art/components/Text"
import LoginMenu from "../../compositions/login/LoginMenu";
import Menu from "../../compositions/menu/Menu";
import { CgGames } from "react-icons/cg";
import DescricaoMenu from "../../compositions/descricao/DescricaoMenu";
import styled from "styled-components";
import { ChangeEventHandler } from "react";


const DivStyled = styled.div`
    
    width: 10px;
    
`


const MenuLateral = ()=>{
    return(
        <DivStyled className="menu__lateral">
            <Menu>
            <Logo>
                <CgGames color={"#B6BBC4"} size={60}/>
                <Text>Josnews</Text>
            </Logo>
                <DescricaoMenu />
                <LoginMenu/>
            </Menu>
        </DivStyled>
    )
}

export default MenuLateral;