import { SiCodereview } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Text } from "@art/components/Text";
import Pesquisa from "../pesquisa/Pesquisa";
import { useState } from "react";
import styled from "styled-components";

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${props => props.theme.textColor};
  .icon{
    color: ${props => props.theme.secondary};
  }
  p{
    margin-left: 4px;
    font-size: 24px;
    color: ${props => props.theme.secondary};
  }
  .arrow{
    margin-left: 90px;
    color: ${props => props.theme.secondary};
  }
`;

export default function HomeMenu({ onClick }) {
  const [ativa, setAtiva] = useState(false);

  function ativaPesquisa() {
    ativa ? setAtiva(false) : setAtiva(true);
  }

  return (
    <HomeStyled>
      <Pesquisa onClick={() => ativaPesquisa()} ativado={ativa} />
      <Text href="/">
        <li>
          <IoHomeOutline className="icon" size={32}  />
          <p>Home</p>
        </li>
      </Text>
      <Text>
      <li
        onClick={() => {
          ativaPesquisa();
        }}
      >
        <CiSearch size={32} className="icon" />
       <p>Pesquisa</p>
      </li>
      </Text>
      <Text>
        <li onClick={onClick}>
          <SiCodereview size={32}  className="icon"/>
          <p>Reviews</p> 
          <MdOutlineKeyboardArrowRight
            className="arrow"
            size={32}
          />
        </li>
      </Text>
      <Text href="/news">
        <li>
          <IoNewspaperOutline className="icon" size={32} />
          <p>News</p>
        </li>
      </Text>
      <Text href="/videos">
        <li>
        <CiVideoOn size={32} className="icon" />
         <p>Videos</p>
        </li>
      </Text>
    </HomeStyled>
  );
}
