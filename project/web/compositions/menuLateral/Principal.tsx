import Logo from "@art/components/Logo";
import  Text  from "@art/components/Text"
import LoginMenu from "../login/LoginMenu";
import Menu from "./AtivaMenu";
import { CgGames } from "react-icons/cg";
import DescricaoMenu from "../descricao/DescricaoMenu";
import styled from "styled-components";

const DivStyled = styled.div`
  width: 10px;
  a{
    color: ${props => props.theme.secondary};
  }
  .icon{
    color: ${props => props.theme.secondary};
  }
`;

const MenuLateral = () => {
  return (
    <DivStyled className="menu__lateral">
      <Menu>
        <Logo>
          <CgGames className="icon" size={60} />
          <Text>Josnews</Text>
        </Logo>
        <DescricaoMenu />
        <LoginMenu />
      </Menu>
    </DivStyled>
  );
};

export default MenuLateral;
