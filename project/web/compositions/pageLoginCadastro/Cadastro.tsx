import Link from "next/link";
import styled from "styled-components";
import Text from "@art/components/Text";

const OpcoesStyled = styled.div`
  border-top: 1px solid ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.secondary};
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  margin-top: 12px;
  padding-top: 24px;
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default function CadastroOpcoes() {
  return (
    <OpcoesStyled className="opcoes">
      <Text tag="p">
        Faça seu <Link href="/cadastro">Cadastro</Link>
      </Text>
    </OpcoesStyled>
  );
}
