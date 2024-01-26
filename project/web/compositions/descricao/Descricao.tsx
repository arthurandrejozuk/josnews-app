import styled from "styled-components";

const UlStyled = styled.ul`
  display: flex;
  a {
    text-decoration: none;
  }
`;

export default function Descricao({ children }) {
  return <UlStyled>{children}</UlStyled>;
}
