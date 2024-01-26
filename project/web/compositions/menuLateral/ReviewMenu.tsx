import { BiLeftArrowAlt } from "react-icons/bi";
import Text from "@art/components/Text";
import styled from "styled-components";
import Descricao from "../descricao/Descricao";

const VoltaStyled = styled.div`
  a {
    cursor: pointer;
  }
`;

export default function ReviewMenu({ onClick }) {
  return (
    <Descricao>
      <VoltaStyled>
        <a onClick={onClick}>
          <BiLeftArrowAlt size={24} color={`${props => props.theme.text}`} />
        </a>
      </VoltaStyled>
      <Text tag="a" href="/analises">
        <li>Análises</li>
      </Text>
      <Text tag="a" href="/analises#rank">
        <li>Rankings</li>
      </Text>
      <Text tag="a" href="/analises#sobre">
        <li> Sobre o Jogo</li>
      </Text>
    </Descricao>
  );
}
