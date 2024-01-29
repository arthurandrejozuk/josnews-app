import React from "react";
import { InterfaceText } from "../../interface/InterfaceText";
import styled from "styled-components";

const TextStyled = styled.p<InterfaceText>`

  h1{
    font-size: 32px;
  }
  p{
    font-size: 24px;
  }
  a{
    text-decoration: none;
  }
`;

export default function Text({
  children,
  href,
  className,
  onClick,
  active,
  tag,
  ...props
}: InterfaceText) {
  return(<TextStyled as={tag} href={href} className={className} onClick={onClick} >{children}</TextStyled>);
}

Text.defaultProps = {
  href: "/"
}