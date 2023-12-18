import Logo from "@art/components/Logo";
import {Text} from "@art/components/Text"
import LoginMenu from "../../compositions/login/LoginMenu";
import Menu from "../../compositions/menu/Menu";
import { CgGames } from "react-icons/cg";
import DescricaoMenu from "../../compositions/descricao/DescricaoMenu";


export default function MenuLateral(){
    return(
        <Menu>
        <Logo>
            <CgGames color={"#B6BBC4"} size={60}/>
            <Text>Josnews</Text>
        </Logo>
            <DescricaoMenu/>
            <LoginMenu/>
        </Menu>
    )
}