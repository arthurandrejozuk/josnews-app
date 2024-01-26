import { SiCodereview } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import  Text  from "@art/components/Text";
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
  a{
    text-decoration: none;
    text-align: center;
    margin-left: 4px;
    font-size: 24px;  
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
      <Text tag="a" href="/">
        <li>
          <IoHomeOutline className="icon" size={32}  />
          <Text tag="p">Home</Text>
        </li>
      </Text>
      <Text >
      <li
        onClick={() => {
          ativaPesquisa();
        }}
      >
        <CiSearch size={32} className="icon" />
       <Text tag="p">Pesquisa</Text>
      </li>
      </Text>
      <Text tag="a">
        <li onClick={onClick}>
          <SiCodereview size={32}  className="icon"/>
          <Text tag="p">Reviews</Text> 
          <MdOutlineKeyboardArrowRight
            className="arrow"
            size={32}
          />
        </li>
      </Text>
      <Text tag="a" href="/news">
        <li>
          <IoNewspaperOutline className="icon" size={32} />
          <Text tag="a">News</Text>
        </li>
      </Text>
      <Text tag="a" href="/videos">
        <li>
        <CiVideoOn size={32} className="icon" />
         <Text tag="p">Videos</Text>
        </li>
      </Text>
    </HomeStyled>
  );
}
