import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 12px;
  max-width: 100%;
  max-height: 100vh;
  width: 10%;
  position: fixed;
  z-index: 2;
  bottom: 10%;
  right: 10%;
  background: transparent;
  color: ${(props) => props.theme.text};
  border: none;
  cursor: pointer;
  @media (max-width: 1000px) {
    botao {
      size: 40px;
    }
  }
`;
interface ButtonProps {
  onClick: () => void;
  modo: boolean;
}

export default function ButtonModo({ onClick, modo }: ButtonProps) {
  return (
    <ButtonStyled onClick={onClick}>
      {modo ? <MdOutlineWbSunny size={40} /> : <LuMoon size={40} />}
    </ButtonStyled>
  );
}

